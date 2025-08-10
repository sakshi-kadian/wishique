import express from "express";
import path from "path";
import fs from "fs";
import multer from "multer";
import Product from "../models/Product.js";

const router = express.Router();


// Multer config for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });


// CREATE - POST product
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category } = req.body;

    if (!name || price == null || !category || !req.file) {
      return res.status(400).json({ error: "Missing required fields or image" });
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const newProduct = new Product({
      name: name.trim(),
      price: parseFloat(price),
      category: category.trim(),
      imageUrl,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("❌ Error creating product:", err);
    res.status(500).json({ error: "Failed to upload product" });
  }
});


// UPDATE - PUT product
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update only if provided and non-empty
    if (name && name.trim() !== "") product.name = name.trim();
    if (price && price.trim() !== "") product.price = parseFloat(price);
    if (category && category.trim() !== "") product.category = category.trim();

    // Replace image if new one uploaded
    if (req.file) {
      if (product.imageUrl) {
        const oldFile = path.join(process.cwd(), "uploads", path.basename(product.imageUrl));
        if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);
      }
      product.imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    await product.save();
    res.json(product);
  } catch (err) {
    console.error("❌ Error updating product:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});


// DELETE - Remove product + image
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete image if exists
    if (product.imageUrl) {
      const filePath = path.join(process.cwd(), "uploads", path.basename(product.imageUrl));
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await product.deleteOne();
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});


// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
