// ShoppingCart.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const ShoppingCart = () => {
  const { cart, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateTotals = () => {
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const tax = cartTotal * 0.01;
    const delivery = 4.99;
    const promoDiscount = 0;
    const subtotal = cartTotal + tax + delivery - promoDiscount;

    return {
      cartTotal: cartTotal.toFixed(2),
      tax: tax.toFixed(2),
      delivery: delivery.toFixed(2),
      promoDiscount: promoDiscount.toFixed(2),
      subtotal: subtotal.toFixed(2)
    };
  };

  const { cartTotal, tax, delivery, promoDiscount, subtotal } = calculateTotals();

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Debug log
      console.log('Sending cart items:', cart);

      const response = await fetch('/api/createCheckoutSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems: cart.map(item => ({
            name: item.name,
            price: parseFloat(item.price),
            quantity: item.quantity || 1,
            image: `https://elite-vapors.vercel.app${item.image}` // Convert relative to absolute URL
          }))
        })
      });

      // Debug log
      const rawResponse = await response.text();
      console.log('Raw API Response:', rawResponse);

      if (!response.ok) {
        try {
          const errorData = JSON.parse(rawResponse);
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        } catch (e) {
          throw new Error(`API Error: ${rawResponse || response.status}`);
        }
      }

      const data = JSON.parse(rawResponse);
      
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error creating Stripe checkout session:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-[auto,1fr,auto] gap-4 p-4 bg-white rounded shadow items-center">
                {/* Image Container */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls and Remove Button */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Cart Total</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${tax}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span>${delivery}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Promo Discount</span>
                <span>-${promoDiscount}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${subtotal}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#FFB800] text-black py-3 rounded-md font-medium hover:bg-[#FFA500] transition-colors focus:outline-none mt-4"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;