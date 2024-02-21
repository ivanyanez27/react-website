import React, { useEffect } from 'react';
import './App.css';
import MainContent from './MainContent';

const portfolioItems = [
  {
    id: 1,
    title: 'Flight Planner Application',
    projectUrl: 'https://github.com/ivanyanez27/flight-planner',
  },
  {
    id: 2,
    title: 'Personal Website on React',
    projectUrl: 'https://github.com/ivanyanez27/react-website',
  },
  {
    id: 3,
    title: 'Movie Recommender System',
    projectUrl: 'https://github.com/ivanyanez27/movie-recommender-project',
  },
];

const experienceItems = [
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
];


function App() {
  useEffect(() => {
    document.title = 'Ivan Yanez';
  }, []);

  return (
    <div className="App">
      <MainContent portfolioItems={portfolioItems} experienceItems={experienceItems} />
    </div>
  );
}

export default App;
