import React from 'react';
import PortfolioGrid from './PortfolioGrid';
import WorkExperienceGrid from './ExperienceGrid';

// Props are being used here
function MainContent({ portfolioItems, experienceItems }) {
  return (
    <div className="MainContent">
      <div className="Wallpaper"></div>
      <h2 className='ItemHeader'>Experience</h2>
      <WorkExperienceGrid ExperienceItems={ExperienceItems} />
      <h2 className='ItemHeader'>Portfolio</h2>
      <PortfolioGrid portfolioItems={portfolioItems} />
    </div>
  );
}

export default MainContent;
