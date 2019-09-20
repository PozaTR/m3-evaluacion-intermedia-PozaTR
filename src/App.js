import React from 'react';
import './App.scss';
import Pokemons from './components/Pokemons';
import PokeList from './components/PokeList';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Pokemons: Pokemons, 
      favs: [],
    }
    this.togglePokemonFav=this.togglePokemonFav.bind(this);
  }

  togglePokemonFav(event) {
    const pokemonId = event.currentTarget.dataset.id;
    this.setState((prevState) => {
      const indexFav = prevState.favs.findIndex(favId => favId === pokemonId);
      if(indexFav >= 0) {
        prevState.favs.splice(indexFav,1)
      }else {
        prevState.favs.push(pokemonId)
      }
      return {
        favs: prevState.favs
      }
    })
  }

  render() {
    const { Pokemons, favs } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1 className="pokemons__main-title">Mi lista de Pokemons</h1>
        </header>
        <main>
          <PokeList Pokemons={Pokemons} togglePokemonFav={this.togglePokemonFav} favs={favs}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
