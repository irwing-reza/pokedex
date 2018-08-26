import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://pokeapi.co/api',
});

export default {
  getPokemons() {
    return instance.get('/v1/pokedex');
  },
  getPokemon(id) {
    return instance.get(`/v2/pokemon/${id}`);
  },
};
