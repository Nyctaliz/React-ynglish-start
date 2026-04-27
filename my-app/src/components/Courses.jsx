import React from 'react';
import './Courses.css';

const Courses = ({ addToCart }) => {
  const courses = [
    { id: 1, title: "Для начинающих", level: "A1", age: "5-7 лет", price: "$49", icon: "🎓", popular: true },
    { id: 2, title: "Разговорный", level: "A2-B1", age: "8-10 лет", price: "$59", icon: "🗣️", popular: false },
    { id: 3, title: "Игровой English", level: "A1-A2", age: "6-9 лет", price: "$54", icon: "🎮", popular: true },
    { id: 4, title: "Подготовка к экзаменам", level: "B1-B2", age: "11-14 лет", price: "$69", icon: "📝", popular: false }
  ];

  return (
    <section className="courses">
      <div className="container">
        <div className="section-header">
          <span className="badge">Наши курсы</span>
          <h2>Выберите идеальный курс</h2>
          <p>Программы для разных возрастов и уровней</p>
        </div>
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className={`course-card ${course.popular ? 'popular' : ''}`}>
              {course.popular && <div className="popular-badge">⭐ Популярный</div>}
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <div className="course-info">
                <span>Уровень: {course.level}</span>
                <span>Возраст: {course.age}</span>
              </div>
              <div className="course-price">{course.price}</div>
              <button className="course-btn" onClick={addToCart}>Записаться</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;