import axios from 'axios';

const resolvers = {
  Query: {
    pokemon: (parent, { id }) =>
      axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${id}`).then(({ data }) => data),
    pokemons: (parent, { limit, offset }) =>
      axios.get('https://ironhack-pokeapi.herokuapp.com/pokemon').then(({ data }) => {
        const start = offset;
        const end = offset + limit;

        console.log('data is ', start, end);

        return data.slice(start, end);
      }),
  },
};

export default resolvers;
