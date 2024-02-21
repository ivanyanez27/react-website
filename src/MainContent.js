import React from 'react';
import PortfolioGrid from './PortfolioGrid';
import ExperienceGrid from './ExperienceGrid';

function MainContent({ portfolioItems, experienceItems }) {
  return (
    <div className="MainContent">
      <div className="Wallpaper"></div>
      <h2 className='ItemHeader' data-aos="zoom-in-up">Experience</h2>
      <ExperienceGrid experienceItems={experienceItems} />
      <h2 className='ItemHeader' data-aos="zoom-in-up">Portfolio</h2>
      <PortfolioGrid portfolioItems={portfolioItems} />
    </div>
  );
}

export default MainContent;
