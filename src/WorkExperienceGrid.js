import React from 'react';

function WorkExperienceGrid({ workExperienceItems }) {
  return (
    <div className="WorkExperienceGrid">
      {workExperienceItems.map(item => (
        <div key={item.id} className="WorkExperienceItem">
          <h3>{item.role}</h3>
          <p>{item.company}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperienceGrid;
