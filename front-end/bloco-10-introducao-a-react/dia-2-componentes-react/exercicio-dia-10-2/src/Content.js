import React from "react";
import PropTypes from 'prop-types';

class Content extends React.Component {
  render(){
    const { name, type, averageWeight, image} = this.props.pokemon
    return(
      <div className='poke' >
        <div className='pokeText'>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className='pokeImg'>
        <img src={image} alt={name}></img>
        </div>
      </div>
    )
  }
}
Content.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.object,
  image: PropTypes.string.isRequired,
};
export default Content;