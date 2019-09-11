import React from 'react';
import './App.css';
import Pokemons from './components/Pokemons';
import PokemonsList from './components/PokemonsList';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="pokemons__main-title">Mi lista de Pokemons</h1>
        <PokemonsList />
      </React.Fragment>
      );
  }
 
}

export default App;
