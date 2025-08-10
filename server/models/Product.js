import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, 
    price: { type: Number, required: true, min: 0 }, 
    category: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true }, 
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
