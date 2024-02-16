import React from 'react';

function PortfolioGrid({ portfolioItems }) {
  return (
    <div className="PortfolioGrid">
      {portfolioItems.map(item => (
        <div key={item.id} className="PortfolioItem">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default PortfolioGrid;
