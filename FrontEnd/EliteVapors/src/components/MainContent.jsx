import React from 'react';
import FeaturedProducts from './FeaturedProduct';
const MainContent = () => {
  return (
    <div>
      {/* Hero Section with Enhanced Styling */}
      <section
        className="hero-section container mx-auto px-4 py-20 text-center relative min-h-[80vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/crown2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1
            className="text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight animate-fade-in"
            style={{
              fontFamily: "'MyCustomFont2', sans-serif",
              background: 'linear-gradient(135deg, #FFD700 0%, #FFF5E1 50%, #FFB800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Elite Vapors
          </h1>

          <p className="text-xl text-yellow-200 mb-8 animate-fade-in-delayed">
            Sultan & Co. <br /> Where Tradition Meets Luxury.
          </p>

          {/* Buy Now Button with enhanced styling */}
          <div className="space-y-4">
            <a
              href="#product"
              className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-black px-8 py-3 rounded-full hover:from-[#FFD700] hover:to-[#DAA520] transition-all duration-300 inline-block font-medium"
            >
              Buy Now
            </a>
            <p className="text-yellow-200/80 mt-4">Limited time offer 40% Discount</p>
          </div>
        </div>
      </section>

      {/* Main Product Banner */}
      <div className="relative bg-black text-white p-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg golden-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800]/5 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#FFB800,transparent_60%)] animate-pulse pointer-events-none"></div>

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold font-serif text-[#FFB800]">PREMIUM</h2>
            <h3 className="text-3xl font-serif">Ignite Your Senses – Explore Premium Vaping</h3>
            <p className="text-gray-300">High-quality premium device with advanced features</p>
            <a href="#product" className="bg-[#FFB800] text-black font-serif px-8 py-3 rounded hover:bg-[#FFD700] mt-4 inline-block">
              SHOP NOW
            </a>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <video
              src="/images/rotating.mp4"
              alt="Premium Device"
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="text-center border-[#FFB800] border-t-2 pt-4">
            <h3 className="text-[#FFB800] text-xl font-bold font-serif">NEW ARRIVALS</h3>
            <p className="mt-2 text-sm font-serif">Check out our latest products</p>
          </div>
          <div className="text-center border-[#FFB800] border-t-2 pt-4">
            <h3 className="text-[#FFB800] text-xl font-bold font-serif">SPECIAL OFFER</h3>
            <p className="mt-2 text-sm">Limited time deals available</p>
          </div>
          <div className="text-center border-[#FFB800] border-t-2 pt-4">
            <h3 className="text-[#FFB800] text-xl font-bold font-serif">FREE SHIPPING</h3>
            <p className="mt-2 text-sm font-serif">On orders over $50</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <FeaturedProducts />


      {/* Solution Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-bold text-black font-serif">Award Winning Spirits for Any Occasion</h1>
          </div>

          {/* Right Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/long.jpg" alt="Vape Image 1" className="rounded-lg shadow-lg" />
            <img src="/images/long2.jpg" alt="Vape Image 2" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
