import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div><span className="stats-number">50k+</span><span>Учеников</span></div>
          <div><span className="stats-number">200+</span><span>Учителей</span></div>
          <div><span className="stats-number">1000+</span><span>Уроков</span></div>
          <div><span className="stats-number">98%</span><span>Довольных родителей</span></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;