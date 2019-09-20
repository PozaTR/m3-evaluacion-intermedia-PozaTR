import React from 'react';
import './Pokemon.scss';
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  render() {
    const { img, name, types, pokemonId , togglePokemonFav, isFav } = this.props
    return (
        <div className={`pokemon__card ${isFav ? 'pokemon__card--fav' : ''} `} onClick={togglePokemonFav} data-id={pokemonId}>
          <img className="pokemon__img" src={img} alt={name}></img>
          <div>
            <p className="pokemon__name">{name}</p>
            <ul className="pokemon__types">
              {types.map((type, index) => {
                return (
                  <li className="pokemon__types__element" key={index}>{type}</li>
                )
              })}
            </ul>
          </div>
        </div>
    );
  }
};

Pokemon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  pokemonId: PropTypes.number.isRequired,
  togglePokemonFav: PropTypes.func.isRequired
}

export default Pokemon;

