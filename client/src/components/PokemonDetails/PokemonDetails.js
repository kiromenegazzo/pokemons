import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import * as SC from './PokemonDetails.styles';
//import { connect } from 'react-redux';

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

/*@connect((state) => {
  return
})*/
class PokemonDetails extends Component {
  componentDidMount() {}

  render() {
    return (
      <Query query={GET_POKEMON} variables={{ id: 1 }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          console.log(data);
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
  }
}

export { PokemonDetails };
