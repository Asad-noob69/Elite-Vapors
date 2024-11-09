import React, { useState, useEffect } from 'react';
import { featuredProducts } from '../data/productdata';
import ProductPopup from './ProductPopup';
import { useCart } from './CartContext';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popupProduct, setPopupProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(featuredProducts);
      } catch (error) {
        setError('Failed to fetch products');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  const openPopup = (product) => setPopupProduct(product);
  const closePopup = () => setPopupProduct(null);

  if (loading) {
    return (
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#FFB800] mb-8">FEATURED PRODUCTS</h2>
          <div className="text-white text-center">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#FFB800] mb-8">FEATURED PRODUCTS</h2>
          <div className="text-red-500 text-center">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#FFB800] mb-8">FEATURED PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden">
              <div className="relative aspect-[4/3] bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-[#FFB800] text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold mb-2">{product.name}</h3>
                <div className="text-[#FFB800] text-xl font-bold mb-4">${product.price.toFixed(2)}</div>
                <div className="flex flex-col gap-2">
                  <button 
                    className="w-full bg-[#FFB800] text-black py-2 px-4 rounded font-semibold hover:bg-[#FFA500] transition-colors"
                    onClick={() => openPopup(product)}
                  >
                    ADD TO CART
                  </button>
                  <button 
                    className="w-full bg-transparent text-gray-400 py-2 px-4 rounded hover:text-gray-300 transition-colors text-sm"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popupProduct && (
        <ProductPopup
          product={popupProduct}
          onClose={closePopup}
          onAddToCart={(quantity) => handleAddToCart(popupProduct, quantity)}
        />
      )}
    </div>
  );
};

export default FeaturedProducts;