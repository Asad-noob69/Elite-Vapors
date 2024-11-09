// src/components/ProductPage.jsx
import React, { useState } from 'react';
import { useCart } from './CartContext';
import ProductCard from './ProductCard';
import ProductPopup from './ProductPopup';

const products = [
  { id: 1, name: "Electronic vapes", price: 5500, image: "/images/crop.jpg" },
  { id: 2, name: "Electronic vapes2", price: 2500, image: "/images/crop2.jpg" },
  { id: 3, name: "Electronic vapes3", price: 2500, image: "/images/crop3.jpg" },
  { id: 4, name: "Electronic vapes4", price: 2500, image: "/images/crop4.jpg" },
  { id: 5, name: "Electronic vapes5", price: 2500, image: "/images/crop5.jpg" },
  { id: 6, name: "Electronic vapes6", price: 2500, image: "/images/crop3.jpg" },
  { id: 7, name: "Electronic vapes7", price: 2500, image: "/images/crop4.jpg" },
  { id: 8, name: "Electronic vapes8", price: 2500, image: "/images/crop2.jpg" },
];

function ProductPage() {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  function showPopup(product) {
    setSelectedProduct(product);
  }

  function closePopup() {
    setSelectedProduct(null);
  }

  return (
    <div className="bg-black min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={() => showPopup(product)}
            />
          ))}
        </div>
      </div>
      
      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={closePopup}
          onAddToCart={(quantity) => addToCart(selectedProduct, quantity)}
        />
      )}
    </div>
  );
}

export default ProductPage;
