import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨</span> Обучение через игру
          </div>
          <h1 className="hero-title">
            Учите английский<br />
            <span className="gradient">играя</span> с удовольствием
          </h1>
          <p className="hero-description">
            Интерактивные курсы, увлекательные игры и персонализированный подход.
            Ваш ребенок полюбит английский с первых занятий!
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Начать обучение →</button>
            <button className="btn-secondary">Смотреть видео ▶</button>
          </div>
          <div className="hero-stats">
            <div>
              <span className="stat-number">10,000+</span>
              <span>Учеников</span>
            </div>
            <div>
              <span className="stat-number">98%</span>
              <span>Отзывов</span>
            </div>
            <div>
              <span className="stat-number">500+</span>
              <span>Игр</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;