import React, { useState } from 'react';

function ProductPopup({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center overflow-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row"
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full md:w-1/2 bg-gray-50 rounded-l-lg flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-80 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-2">{product.name}</h2>
            <p className="text-xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-8">{product.description}</p>
          </div>

          <div className="flex items-center mb-8">
            <label className="text-sm text-gray-600 mr-2">Quantity:</label>
            <div className="flex items-center border rounded-md w-32">
              <button
                className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#FFB800] text-black py-3 rounded-md font-medium hover:bg-[#FFA500] transition-colors focus:outline-none"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPopup;