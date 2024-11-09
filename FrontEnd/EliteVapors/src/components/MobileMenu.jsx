// MobileMenu.jsx
import React, { useState } from 'react';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div>
      <button onClick={toggleMenu} className="mobile-menu-button">
        Menu
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          {/* Add more menu items as needed */}
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
