import React from 'react';
import Pokemon from './Pokemon';

class PokemonsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="pokemons__list">
          <li className="pokemons__list__element">
            <Pokemon />
          </li>
        </ul>
      </React.Fragment>

    );
  }
}

export default PokemonsList;