import React from 'react';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as SC from './PokemonList.styles';
import { PokemonListItem } from '../PokemonListItem';

const GET_POKEMONS = gql`
  query Pokemons($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
      id
      name
      picture
    }
  }
`;

const withPokemons = graphql(GET_POKEMONS, {
  options: {
    variables: {}
  },
});

const List = props => {
  const {
    loading,
    error,
    data: { pokemons = [] }
  } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <SC.Wrapper>
      {pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.id} {...pokemon} />
      ))}
    </SC.Wrapper>
  );
};

const PokemonList = withPokemons(List);

export { PokemonList };
