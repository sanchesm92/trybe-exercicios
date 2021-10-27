import React from 'react';
import logo from './logo.svg';
import './App.css';
import aboutMe from './Component';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const animeBeckSongs = ['Moon On The Water', 'Follow Me', 'Slip Out', 'Face', 'By Her', `I've Got A Feeling`, 'Spice Of Life', 'Hit in The Usa', 'I call You Love', 'Journey', 'Moon Beams', 'My World Down', 'Evolution', 'Like a Foojin', 'Looking Back'];
  return animeBeckSongs.map((song) => task(song));
}

export default App;