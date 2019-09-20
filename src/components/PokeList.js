import React from 'react';
import './PokeList.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokemonsList extends React.Component {
  render() {
    const { pokemons, togglePokemonFav } = this.props;
    return (
        <div className="pokemons__container">
          <ol className="pokemons__list">
            {pokemons.map(pokemon => 
                <li className="pokemons__list__element" key={pokemon.id}>
                  <Pokemon
                    name={pokemon.name}
                    img={pokemon.url}
                    types={pokemon.types}
                    pokemonId={pokemon.id}
                    togglePokemonFav={togglePokemonFav}
                    isFav={pokemon.isFav}
                  />
                </li>
            )}
          </ol>
        </div>
    );
  }
}

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  togglePokemonFav: PropTypes.func.isRequired,
}

export default PokemonsList;