import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api',
});

export default {
  getPokemons() {
    return instance.get('/v1/pokedex');
  },
  getPokemon(id) {
    return instance.get(`/v2/pokemon/${id}`);
  },
};
