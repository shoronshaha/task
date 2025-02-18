import React from "react";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src={product?.images[0]?.optimizeUrl}
              alt={product.name}
              className="w-full sm:w-1/2 h-60 object-cover rounded"
            />
            {product?.video?.secure_url && (
              <video
                className="w-full sm:w-1/2 h-60 object-cover rounded"
                controls
              >
                <source src={product?.video?.secure_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Right Side - Details */}
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="text-lg font-semibold mt-2">${product.price}</p>
            <ul className="mt-4">
              {product.details?.map((detail, index) => (
                <li key={index} className="text-gray-600">
                  ✅ {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
