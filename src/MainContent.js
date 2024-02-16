import React from 'react';
import PortfolioGrid from './PortfolioGrid';
import WorkExperienceGrid from './WorkExperienceGrid';

// Props are being used here
function MainContent({ portfolioItems, workExperienceItems }) {
  return (
    <div className="MainContent">
      <div className="Wallpaper"></div>
      <h2 className='ItemHeader'>Work experience</h2>
      <WorkExperienceGrid workExperienceItems={workExperienceItems} />
      <h2 className='ItemHeader'>Portfolio</h2>
      <PortfolioGrid portfolioItems={portfolioItems} />
    </div>
  );
}

export default MainContent;
