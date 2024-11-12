import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#244E4D' }} className="text-white py-10 font-serif">
      <div className="container  mx-auto flex justify-between items-start">
        
        {/* Company Information */}
        <div>
          <img src="/images/favicon.png" alt="Elite-Vapors Premium Logo" className="mb-4 w-32 h-32" />
          <h2 className="font-bold text-2xl">Elite-Vapors Premium</h2>
          <p className="mt-2">3308 Towerwood Drive<br /> Farmers' Branch, TX 75234-2317<br /> United States</p>
          <p className="mt-4">675 Cochrane Drive, East Tower, Suite 639<br /> Markham, Ontario L3R 0B8<br /> Canada</p>
        </div>
        
        {/* Shop Links */}
        <div>
          <h4 className="font-bold mb-4 text-xl">SHOP</h4>
          <ul>
            <li><a href="#" className="hover:text-gray-400">ABOUT US</a></li>
            <li><a href="#" className="hover:text-gray-400">NICOTINE</a></li>
            <li><a href="#" className="hover:text-gray-400">SPIRITS</a></li>
            <li><a href="#" className="hover:text-gray-400">APPAREL</a></li>
          </ul>
        </div>
        
        {/* Customer Service Links */}
        <div>
          <h4 className="font-bold mb-4 text-xl">CUSTOMER SERVICE</h4>
          <ul>
            <li><a href="#" className="hover:text-gray-400">PRIVACY POLICY</a></li>
            <li><a href="#" className="hover:text-gray-400">TERMS OF SERVICE</a></li>
            <li><a href="#" className="hover:text-gray-400">CONTACT US</a></li>
            <li><a href="#" className="hover:text-gray-400">RETURNS OR EXCHANGES</a></li>
          </ul>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.596 0 0 .595 0 1.326v21.348C0 23.405.596 24 1.326 24H12.82v-9.293H9.692v-3.622h3.128V8.413c0-3.1 1.892-4.787 4.655-4.787 1.324 0 2.462.099 2.794.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.762v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.326-.595 1.326-1.326V1.326C24 .595 23.405 0 22.675 0z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.331 3.608 1.306.975.975 1.244 2.242 1.306 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.331 2.633-1.306 3.608-.975.975-2.242 1.244-3.608 1.306-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.331-3.608-1.306-.975-.975-1.244-2.242-1.306-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.331-2.633 1.306-3.608.975-.975 2.242-1.244 3.608-1.306C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.726.129 4.433.338 3.333 1.439 2.232 2.541 2.023 3.834 1.964 5.16.906 6.44.894 6.85.894 10.106s.012 3.584.07 4.85c.059 1.366.268 2.659 1.369 3.76 1.1 1.1 2.394 1.309 3.76 1.368 1.266.058 1.676.07 4.85.07s3.584-.012 4.85-.07c1.366-.059 2.659-.268 3.76-1.368 1.1-1.1 1.309-2.394 1.368-3.76.058-1.266.07-1.676.07-4.85s-.012-3.584-.07-4.85c-.059-1.366-.268-2.659-1.369-3.76-1.1-1.1-2.394-1.309-3.76-1.368C15.584.012 15.174 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.93 4.93 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.384 4.482c-4.083-.201-7.697-2.158-10.126-5.134a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.099a4.904 4.904 0 0 1-2.228-.616c-.054 1.957 1.367 3.792 3.415 4.198a4.935 4.935 0 0 1-2.224.084 4.924 4.924 0 0 0 4.6 3.419A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.03 0-.214 0-.428-.015-.64A9.936 9.936 0 0 0 24 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;