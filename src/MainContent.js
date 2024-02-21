import React from 'react';
import PortfolioGrid from './PortfolioGrid';
import ExperienceGrid from './ExperienceGrid';

function MainContent({ portfolioItems, experienceItems }) {
  return (
    <div className="MainContent">
      <div className="Wallpaper"></div>
      <h2 className='ItemHeader'>Experience</h2>
      <ExperienceGrid experienceItems={experienceItems} />
      <h2 className='ItemHeader'>Portfolio</h2>
      <PortfolioGrid portfolioItems={portfolioItems} />
    </div>
  );
}

export default MainContent;
