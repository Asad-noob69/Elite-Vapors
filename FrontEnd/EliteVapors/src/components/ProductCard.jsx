
// ProductCard.jsx (Updated without add to cart button)
import React from 'react';

function ProductCard({ product, onProductClick }) {
  return (
    <div 
      className="bg-white rounded-lg p-4 cursor-pointer transition-transform hover:scale-105"
      onClick={() => onProductClick(product)}
    >
      <div className="aspect-square w-full overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-gray-800 text-lg font-medium">{product.name}</h3>
        <p className="text-gray-600">{product.price}Rs.</p>
      </div>
    </div>
  );
}

export default ProductCard;