import React from 'react';
import './PokeList.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokemonsList extends React.Component {
  render() {
    const { pokemonFav, Pokemons } = this.props
    return (
        <div className="pokemons__container">
          <ol className="pokemons__list">
            {Pokemons.map(pokemon => 
                <li className="pokemons__list__element" key={pokemon.id}>
                  <Pokemon
                    name={pokemon.name}
                    img={pokemon.url}
                    types={pokemon.types}
                    pokemonFav={pokemonFav}
                  />
                </li>
            )}
          </ol>
        </div>
    );
  }
}

PokemonsList.propTypes = {
  Pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokemonsList;