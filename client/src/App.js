import React, { Component, Fragment } from 'react';
import { PokemonList } from './components/PokemonList';
import { Route, Link } from 'react-router-dom';
import { PokemonDetails } from './components/PokemonDetails';

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:id" component={PokemonDetails} />
      </Fragment>
    );
  }
}

export default App;
