import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

const loggerMiddleware = createLogger();

const initialState = {
  pokemons: []
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS_REQUEST':
      return state;
  }
  return state;
};

const store = createStore(
  combineReducers({
    pokemons: pokemonReducer,
    client
  }),
  {},
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const root = document.getElementById('root');

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, root);

