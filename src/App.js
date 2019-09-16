import React from 'react';
import './App.scss';
import Pokemons from './components/Pokemons';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Pokemons: Pokemons
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="pokemons__main-title">Mi lista de Pokemons</h1>
        <PokeList Pokemons={this.state.Pokemons}/>
      </React.Fragment>
      );
  }
}

export default App;
