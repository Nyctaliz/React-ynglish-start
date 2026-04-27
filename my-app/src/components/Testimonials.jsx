import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: "Анна Иванова", role: "Мама ученика", text: "Мой ребенок полюбил английский! Отличные результаты за 3 месяца.", avatar: "👩" },
    { name: "Сергей Петров", role: "Папа ученика", text: "Очень довольны прогрессом. Спасибо команде Ynglish!", avatar: "👨" },
    { name: "Елена Смирнова", role: "Учитель", text: "Лучшая платформа для обучения детей английскому языку.", avatar: "👩‍🏫" }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="badge">Отзывы</span>
          <h2>Что говорят о нас</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-avatar">{t.avatar}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;