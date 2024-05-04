import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="experience">
      <h2><FaRegLightbulb className="experience-icon" />Experience</h2>
      <div className="experience-item">
        <h3>Senior Developer</h3>
        <p>Company A - 2018-2021</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet leo quis justo consectetur accumsan.</p>
      </div>
      <div className="experience-item">
        <h3>Junior Developer</h3>
        <p>Company B - 2016-2018</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet leo quis justo consectetur accumsan.</p>
      </div>
    </section>
  );
};

export default Experience;