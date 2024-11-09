import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Import CartProvider only
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart1';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainContent />
                  <ProductPage /> 
                  <Footer />
                </>
              }
            />
            <Route
              path="/cart"
              element={<ShoppingCart />}
            />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
