import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioGrid({ portfolioItems }) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="PortfolioGrid">
      {portfolioItems.map(item => (
        <div key={item.id} className="PortfolioItem" data-aos="zoom-in-up">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default PortfolioGrid;
