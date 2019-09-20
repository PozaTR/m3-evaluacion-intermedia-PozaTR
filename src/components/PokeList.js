import React from 'react';
import './PokeList.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokemonsList extends React.Component {
  render() {
    const { Pokemons, togglePokemonFav, favs} = this.props
    console.log(favs)
    return (
        <div className="pokemons__container">
          <ol className="pokemons__list">
            {Pokemons.map(pokemon => 
                <li className="pokemons__list__element" key={pokemon.id}>
                  <Pokemon
                    name={pokemon.name}
                    img={pokemon.url}
                    types={pokemon.types}
                    pokemonId={pokemon.id}
                    togglePokemonFav={togglePokemonFav}
                    isFav={favs.findIndex(favId => parseInt(favId) === pokemon.id) >= 0}
                  />
                </li>
            )}
          </ol>
        </div>
    );
  }
}

PokemonsList.propTypes = {
  Pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  togglePokemonFav: PropTypes.func.isRequired,
  favs: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default PokemonsList;