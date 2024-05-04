import React from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills">
      <h2><FaRegHandPointRight className="skills-icon" /> Skills</h2>
      <div className="skill">
        <h4>HTML</h4>
        <div className="skill-level" style={{ width: '90%', backgroundColor: '#3498db' }}></div>
      </div>
      <div className="skill">
        <h4>CSS</h4>
        <div className="skill-level" style={{ width: '80%', backgroundColor: '#2ecc71' }}></div>
      </div>
      <div className="skill">
        <h4>JavaScript</h4>
        <div className="skill-level" style={{ width: '70%', backgroundColor: '#f1c40f' }}></div>
      </div>
      <div className="skill">
        <h4>React</h4>
        <div className="skill-level" style={{ width: '75%', backgroundColor: '#e67e22' }}></div>
      </div>
    </section>
  );
};

export default Skills;