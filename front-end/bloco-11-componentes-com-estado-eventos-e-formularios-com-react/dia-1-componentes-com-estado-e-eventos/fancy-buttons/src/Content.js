import React from "react";
import pokemons from "./Pokemons";

class Content extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
  this.state = {
    pokemon: [],
    posit: 0,
    inputValue: '',
  }
  pokemons.forEach((pokemon) => this.state.pokemon.push(pokemon))// colocando os pokemons no state
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }
  render() {
    return <div className='content'>
      <input onChange={this.handleChange} />
      <section className='section'>
      {this.state.pokemon
      .filter((pokemon) => pokemon.name.toLowerCase().includes(this.state.inputValue))
      .map(({id, name, type, averageWeight, moreInfo, image}) => 
        (
        <div className='card'>
          <div className='cardTxt'>
          <p>{`id: ${id}`}</p>
          <p>{`Nome: ${name}`}</p>
          <p>{`Tipo: ${type}`}</p>
          <p>{ `Peso: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          <a href={moreInfo} >More Info</a>
          </div>
          <img src={image} alt={name} className='pokeImg'></img>
        </div>
          ))}
      </section>
    </div>
  }
}

export default Content;