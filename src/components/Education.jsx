import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="education">
      
      <h2><FaGraduationCap className="education-icon" /> Education</h2>
      <div className="education-item">
        <h3>Bachelor's Degree</h3>
        <p>University A - 2012-2016</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet leo quis justo consectetur accumsan.</p>
      </div>
    </section>
  );
};

export default Education;