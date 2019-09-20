import React from 'react';
import './App.scss';
import Pokemons from './components/Pokemons';
import PokeList from './components/PokeList';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Pokemons: Pokemons, 
      favs: []
    }
    this.pokemonFav=this.pokemonFav.bind(this);
  }

  pokemonFav(event) {
    const pokemonId = event.currentTarget.dataset.id;
    this.setState((prevState) => {
      const indexFav = prevState.favs.findIndex(favId => favId === pokemonId);
      if(indexFav >= 0) {
        prevState.favs.splice(indexFav,1)
      }else {
        prevState.favs.push(pokemonId)
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="pokemons__main-title">Mi lista de Pokemons</h1>
        </header>
        <main>
          <PokeList Pokemons={this.state.Pokemons} pokemonFav={this.pokemonFav}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
