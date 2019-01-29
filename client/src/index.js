import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  clientState: {
    pokemons: []
  }
});

const root = document.getElementById("root");

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

if (module.hot) {
  module.hot.accept("./App", () => {
    //const NextApp = require('./App').default
    ReactDOM.render(<Root />, root);
  });
}
