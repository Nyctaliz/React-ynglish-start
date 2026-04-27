import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    { icon: "🎮", title: "Игровой подход", desc: "Учитесь через увлекательные игры" },
    { icon: "📱", title: "Доступно везде", desc: "Занимайтесь с любого устройства" },
    { icon: "🎯", title: "Индивидуально", desc: "Программа под ваш уровень" },
    { icon: "👨‍🏫", title: "Опытные учителя", desc: "Сертифицированные педагоги" },
    { icon: "🏆", title: "Достижения", desc: "Награды и сертификаты" },
    { icon: "💬", title: "Чат", desc: "Общение с носителями" }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <span className="badge">Преимущества</span>
          <h2>Почему выбирают Ynglish</h2>
          <p>Мы создали уникальную методику для детей любого возраста</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;