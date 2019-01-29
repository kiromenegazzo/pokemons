import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as SC from "./PokemonDetails.styles";

const GET_POKEMON = gql`
  query Pokemon($id: ID!) {
    pokemon(id: $id) {
      id
      picture
      name
      base {
        Attack
      }
      skills {
        transfer
        level_up
      }
    }
  }
`;

const PokemonDetails = () => {
  return (
    <Query query={GET_POKEMON} variables={{ id: 1 }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const {
          pokemon: { name, picture }
        } = data;

        return (
          <SC.Wrapper>
            {name}
            <SC.Image src={picture} alt={name} />
          </SC.Wrapper>
        );
      }}
    </Query>
  );
};

export { PokemonDetails };
