import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ynglish</h3>
            <p>Обучение английскому через игру</p>
          </div>
          <div className="footer-section">
            <h4>Навигация</h4>
            <a href="#">Главная</a>
            <a href="#">Курсы</a>
            <a href="#">О нас</a>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <a href="#">info@ynglish.com</a>
            <a href="#">+7 (999) 123-45-67</a>
          </div>
          <div className="footer-section">
            <h4>Соцсети</h4>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Ynglish. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;