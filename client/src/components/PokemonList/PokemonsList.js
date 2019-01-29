import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import * as SC from "./PokemonList.styles";
import { PokemonListItem } from "../PokemonListItem";

const GET_POKEMONS = gql`
  query Pokemons($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
      pagination {
        total
        limit
        offset
      }
      result {
        id
        name
        picture
      }
    }
  }
`;

const withPokemons = graphql(GET_POKEMONS, {
  options: {
    variables: {},
    fetchPolicy: "cache-and-network"
  }
});

const List = props => {
  const {
    data: { pokemons: { result = [], pagination: {total} } = {}, fetchMore, loading, error }
  } = props;

  if (error) return <p>Error :(</p>;

  return (
    <SC.Wrapper>
      {result.map(pokemon => (
        <PokemonListItem key={pokemon.id} {...pokemon} />
      ))}
      {loading && <SC.Loading>Loading...</SC.Loading> }
      <SC.ButtonMore
        disabled={loading}
        onClick={() =>
          fetchMore({
            variables: { offset: result.length },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;

              const result = [
                ...prev.pokemons.result,
                ...fetchMoreResult.pokemons.result
              ];

              const pagination = Object.assign(
                {},
                fetchMoreResult.pokemons.pagination
              );

              return Object.assign({}, prev, {
                pokemons: Object.assign({}, prev.pokemons, {
                  result,
                  pagination
                })
              });
            }
          })
        }
      >
        More Pokemons
      </SC.ButtonMore>
      <SC.Pagination>{`${result.length}/${total}`}</SC.Pagination>
    </SC.Wrapper>
  );
};

const PokemonList = withPokemons(List);

export { PokemonList };
