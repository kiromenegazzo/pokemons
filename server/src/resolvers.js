import axios from "axios";

const resolvers = {
  Query: {
    pokemon: (_, { id }) =>
      axios
        .get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${id}`)
        .then(({ data }) => data),
    pokemons: (_, { limit, offset }) =>
      axios
        .get("https://ironhack-pokeapi.herokuapp.com/pokemon")
        .then(({ data }) => {
          const start = offset;
          const end = offset + limit;

          return {
            pagination: {
              total: data.length,
              limit,
              offset
            },
            result: data.slice(start, end)
          };
        })
  }
};

export default resolvers;
