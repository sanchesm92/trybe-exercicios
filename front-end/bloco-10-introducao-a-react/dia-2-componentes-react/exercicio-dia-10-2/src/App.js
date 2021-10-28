import React from 'react';
import './App.css';
import Header from './Header'
import Content from './Content';
import pokemons from './Data';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="div">
        <Header />
        <div className='content'>
        {pokemons.map((pkm) => <Content key={pkm} pokemon={pkm} />)}
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;