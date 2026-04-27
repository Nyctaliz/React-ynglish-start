import React, { useState } from 'react';
import './Header.css';

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🎮</span>
            <span className="logo-text">Ynglish</span>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#">Главная</a>
            <a href="#">Курсы</a>
            <a href="#">Игры</a>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
          </nav>

          <div className="header-actions">
            <button className="cart-btn">
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="profile-btn">👤</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
