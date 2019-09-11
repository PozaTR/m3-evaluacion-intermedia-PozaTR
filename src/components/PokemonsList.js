import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokemonsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ol className="pokemons__list">
          {this.props.Pokemons.map((pokemon, index) => {
            console.log(pokemon);
            return(
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
      </React.Fragment>
    );
  }
}

PokemonsList.propTypes = {
  Pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default PokemonsList;