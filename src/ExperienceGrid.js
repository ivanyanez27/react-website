import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExperienceGrid({ experienceItems }) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="ExperienceGrid">
      {experienceItems.map(item => (
        <div key={item.id} className="ExperienceItem" data-aos="zoom-in-up">
          <h3>{item.role}</h3>
          <p>{item.company}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceGrid;
