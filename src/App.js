import React from 'react';
import './App.scss';
import Pokemons from './components/Pokemons';
import PokeList from './components/PokeList';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: Pokemons, 
    }
    this.togglePokemonFav=this.togglePokemonFav.bind(this);
  }

  togglePokemonFav(event) {
    const pokemonId = parseInt(event.currentTarget.dataset.id);
    this.setState((prevState) => {
      const pokemonIndex = prevState.pokemons.findIndex(pokemon => pokemon.id === pokemonId);
      const pokemonFav = prevState.pokemons[pokemonIndex];
      const pokemons = prevState.pokemons
      pokemons[pokemonIndex] = {...pokemonFav, isFav: !pokemonFav.isFav}
      return {
        pokemons: pokemons
      }
    })
  }

  render() {
    const { pokemons } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1 className="pokemons__main-title">Mi lista de Pokemons</h1>
        </header>
        <main>
          <PokeList pokemons={pokemons} togglePokemonFav={this.togglePokemonFav} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
