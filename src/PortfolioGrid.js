import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function PortfolioGrid({ portfolioItems }) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="PortfolioGrid">
      {portfolioItems.map(item => (
        <div key={item.id} className="PortfolioItem" data-aos="zoom-in-up">
          <h3>{item.title}</h3>
          <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            <span> View on GitHub</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PortfolioGrid;
