import { useState, useEffect } from "react";
import ProductModal from "./ProductModal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="border p-4 rounded-lg shadow-md bg-white"
        >
          <img
            src={product?.images[0]?.optimizeUrl}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-bold mt-2">${product.price}</p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => setSelectedProduct(product)}
          >
            View Details
          </button>
        </div>
      ))}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
