// App.js
import React from 'react';
import './App.css'
import MainContent from './MainContent';

const portfolioItems = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    projectUrl: 'http://link-to-live-project.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    projectUrl: 'http://link-to-live-project-two.com',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    projectUrl: 'http://link-to-live-project-three.com',
  },
  // ... more portfolio items
];

const workExperienceItems = [
  {
    id: 1,
    role: 'Software Engineer II - Tech Analyst',
    company: 'Bank of America'
  },
  {
    id: 2,
    role: 'Software Engineer I - Tech Analyst',
    company: 'Bank of America'
  },
  {
    id: 3,
    role: 'Software Engineer - Tech Analyst Intern',
    company: 'Bank of America'
  },
  // ... more work experience entries
];


function App() {
  return (
    <div className="App">
      <MainContent portfolioItems={portfolioItems} workExperienceItems={workExperienceItems} />
    </div>
  );
}

export default App;
