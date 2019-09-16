import React from 'react';
import './PokeList.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokemonsList extends React.Component {
  render() {
    return (
        <div className="pokemons__container">
          <ol className="pokemons__list">
            {this.props.Pokemons.map((pokemon, index) => {
              return (
                <li className="pokemons__list__element" key={index}>
                  <Pokemon
                    name={pokemon.name}
                    img={pokemon.url}
                    types={pokemon.types}
                  />
                </li>
              )
            })}
          </ol>
        </div>
    );
  }
}

PokemonsList.propTypes = {
  Pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokemonsList;