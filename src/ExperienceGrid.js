import React from 'react';

function ExperienceGrid({ experienceItems }) {
  return (
    <div className="ExperienceGrid">
      {experienceItems.map(item => (
        <div key={item.id} className="ExperienceItem">
          <h3>{item.role}</h3>
          <p>{item.company}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceGrid;
