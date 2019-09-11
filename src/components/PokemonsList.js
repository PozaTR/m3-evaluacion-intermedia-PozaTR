import React from 'react';
import Pokemon from './Pokemon';

class PokemonsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="pokemons__list">
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
        </ul>
      </React.Fragment>

    );
  }
}

export default PokemonsList;