import React, { useEffect, useState } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const categories = [
  "Jewelry",
  "Clay Art",
  "Candles",
  "Painting",
  "Home Decor",
  "Accessories",
  "Ceramics",
  "Textiles",
  "Wellness",
  "Others",
];

const UploadProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    image: null,
    preview: "",
  });

  useEffect(() => {
    return () => {
      if (formData.preview) {
        URL.revokeObjectURL(formData.preview);
      }
    };
  }, [formData.preview]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, price, category, image } = formData;
    if (!name || !price || !category || (!image && !formData.imageUrl)) {
      alert("Please fill all fields and upload an image");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("price", price);
    formDataToSend.append("category", category);
    formDataToSend.append("image", image);

    try {
      let response;
      if (editingId) {
        response = await fetch(`${BACKEND_URL}/api/products/${editingId}`, {
          method: "PUT",
          body: formDataToSend,
        });
      } else {
        response = await fetch(`${BACKEND_URL}/api/products`, {
          method: "POST",
          body: formDataToSend,
        });
      }

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to save product");
      }

      const result = await response.json();

      if (editingId) {
        setProducts(products.map((p) => (p._id === editingId ? result : p)));
        setEditingId(null);
      } else {
        setProducts([result, ...products]);
      }

      setFormData({ name: "", price: "", category: "", image: null, preview: "" });
    } catch (err) {
      alert("Error submitting product: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Delete failed");
      }

      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
  };

  const handleEdit = (prod) => {
    setFormData({
      name: prod.name,
      price: prod.price,
      category: prod.category,
      imageUrl: prod.imageUrl,
      image: null,
      preview: prod.imageUrl,
    });
    setEditingId(prod._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section aria-label="Upload Product" className="p-4 md:p-8">
      <div className="bg-white border border-[#E8DCD2] rounded-2xl shadow-lg p-6 md:p-10 space-y-12 max-w-7xl mx-auto">
        {/* Upload Form */}
        <div>
          <h2 className="text-3xl font-serif font-semibold mb-6 text-center md:text-left">
            {editingId ? "Edit Product" : "Upload New Product"}
          </h2>
          <div className="bg-[#FFFCF8] border border-[#E8DCD2] p-6 md:p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#5F4C4C]">
                  Product Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rose Gold Bracelet"
                  className="w-full border border-[#E8DCD2] rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-[#b46f5b]"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#5F4C4C]">
                  Price ($)
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*\.?\d*$/.test(value)) {
                      setFormData({ ...formData, price: value });
                    }
                  }}
                  placeholder="e.g. 49.99"
                  className="w-full border border-[#E8DCD2] rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-[#b46f5b]"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#5F4C4C]">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-[#E8DCD2] rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-[#b46f5b]"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#5F4C4C]">
                  Product Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      if (formData.preview) URL.revokeObjectURL(formData.preview);
                      setFormData({
                        ...formData,
                        image: file,
                        preview: URL.createObjectURL(file),
                      });
                    }
                  }}
                  className="w-full border border-[#E8DCD2] rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-[#b46f5b]"
                />
                {formData.preview && (
                  <img
                    src={formData.preview}
                    alt="Preview"
                    className="mt-4 max-h-40 rounded-md shadow-md object-cover w-full"
                  />
                )}
              </div>

              <button
                type="submit"
                className="w-full max-w-full bg-[#b46f5b] text-white px-4 md:px-6 py-3 rounded-md hover:bg-[#7a3a1b] transition font-medium break-words"
              >
                {editingId ? "Update Product" : "Upload Product"}
              </button>
            </form>
          </div>
        </div>

        {/* Product Grid */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-6 text-center md:text-left text-[#2E2E2E]">
            Your Uploaded Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((prod) => (
              <div
                key={prod._id}
                className="bg-white border border-[#E8DCD2] rounded-xl p-4 shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={prod.imageUrl}
                  alt={prod.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <p className="font-medium text-[#2E2E2E] text-[16px] mb-1 truncate">
                  {prod.name}
                </p>
                <span className="inline-block bg-[#F3ECE7] text-[#5F4C4C] text-xs px-3 py-1 rounded-full mb-2 truncate">
                  {prod.category}
                </span>
                <p className="font-semibold text-[#3B2B2B] text-[16px]">
                  ${prod.price.toFixed(2)}
                </p>

                <div className="mt-auto flex gap-3 flex-wrap">
                  <button
                    onClick={() => handleEdit(prod)}
                    className="px-4 py-1 text-sm rounded-full border border-[#d9c5ba] text-[#5F4C4C] hover:bg-[#f7f0ea] transition flex-grow text-center"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(prod._id)}
                    className="px-4 py-1 text-sm rounded-full border border-[#d9c5ba] text-[#a94444] hover:bg-[#fdf1f0] transition flex-grow text-center"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadProduct;