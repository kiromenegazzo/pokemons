import React from 'react';
import * as SC from './PokemonListItem.styles';
import { Link } from 'react-router-dom';

const PokemonListItem = props => {
  const { id, name, picture } = props;
  const realIndex = Number(id) + 1;

  return (
    <SC.Wrapper>
      <SC.Number>#{realIndex}</SC.Number>
      <Link to={`/pokemon/${name}`}>
        <b>{name}</b>
      </Link>
      <SC.Image src={picture} alt={name} />
    </SC.Wrapper>
  );
};

export { PokemonListItem };
