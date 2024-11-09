import React, { useState } from 'react';
import { ShoppingCart as CartIcon, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import ShoppingCart from './ShoppingCart1';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    document.body.style.overflow = isCartOpen ? 'auto' : 'hidden';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative">
      <nav className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mx-4 lg:mx-40 bg-[#1C1C1C] rounded-full border-2 border-[#FFB800]/20 px-6 py-3">
            {/* Logo */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/" className="flex items-center">
                <div className="w-10 h-10 bg-transparent border-2 border-[#FFB800] rounded-lg flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-6 h-6" />
                </div>
              </a>
              
              {/* Mobile Menu Button */}
              <button onClick={toggleMobileMenu} className="md:hidden text-white">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-12" style={{ fontFamily: 'Manrope' }}>
              <a href="#" className="text-white hover:text-[#FFB800] transition-colors">How it works</a>
              <a href="#" className="text-white hover:text-[#FFB800] transition-colors">Recent Work</a>
              <a href="#" className="text-white hover:text-[#FFB800] transition-colors">Pricing</a>
              <a href="#" className="text-white hover:text-[#FFB800] transition-colors">About Me</a>
            </div>

            {/* Cart Icon and CTA for Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={toggleCart} className="text-white hover:text-[#FFB800] transition-colors relative">
                <CartIcon className="h-6 w-6" />
              </button>
              <a
                href="tel:+923705764856"
                className="text-black px-6 py-3 rounded-full hover:bg-gradient-to-r transition-colors font-medium"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  background: 'linear-gradient(90deg, #DAA520 0%, #FFD700 50%, #FFFFFF 100%)',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  transition: 'background 0.3s ease',
                }}
              >
                Book a call with SULTAN
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black text-center space-y-4 py-4" style={{ fontFamily: 'Manrope' }}>
            <a href="#" className="text-white hover:text-[#FFB800] transition-colors block">How it works</a>
            <a href="#" className="text-white hover:text-[#FFB800] transition-colors block">Recent Work</a>
            <a href="#" className="text-white hover:text-[#FFB800] transition-colors block">Pricing</a>
            <a href="#" className="text-white hover:text-[#FFB800] transition-colors block">About Me</a>
            
            {/* Cart Icon in Mobile Menu */}
            <button 
              onClick={toggleCart} 
              className="text-white hover:text-[#FFB800] transition-colors mt-4"
            >
              <CartIcon className="h-6 w-6 inline-block" /> 
              <span className="ml-2">Cart</span>
            </button>
          </div>
        )}
      </nav>

      {/* Shopping Cart Overlay */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleCart} />
          <div className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="h-full overflow-y-auto">
              <ShoppingCart />
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
