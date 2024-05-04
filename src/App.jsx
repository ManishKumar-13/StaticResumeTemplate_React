import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="resume">
      <header>
        <h1>Manish Kumar</h1>
        <p>Web Developer</p>
      </header>
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <footer>
        <p>Contact: manish.kumar13@gmail.com | Phone: 123-456-7890</p>
      </footer>
    </div>
  );
}

export default App;
