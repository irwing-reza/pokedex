<template>
  <div class="details">
    <b-loading :active.sync="isLoading" :can-cancel="false"></b-loading>
    <div class="empty" v-if="empty">
     <span class="emotion">
       <i class="mdi mdi-emoticon-sad mdi-24px"></i>
     </span>
     <p>We coudln't find pokemon {{ id }}</p>
    </div>
    <div class="content" v-else-if="Object.keys(data).length != 0">
      <div class="columns">
        <div class="column has-text-centered is-6">
          <span class="name title">#{{ data.id }} {{ data.name | capitalizeFirstLetter }}</span><br>
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`" class="poke-image">
        </div>
        <div class="column is6">
          <div class="tags">
            <span v-for="type in data.types" class="tag" :key="type.type.name">
              {{ type.type.name }}
            </span>
          </div>
          <p>Weight: {{ data.height | standarazie }}m</p>
          <p>Weight: {{ data.weight | standarazie }}kg</p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-12">
          <h4 class="has-text-white">Stats</h4>
          <table class="table responsive-table">
            <thead>
              <th class="has-text-white has-background-danger">HP</th>
              <th class="has-text-white has-background-warning">Attack</th>
              <th class="has-text-white has-background-link">Defense</th>
              <th class="has-text-white has-background-dark">Sp. Attack</th>
              <th class="has-text-black has-background-light">Sp. Defense</th>
              <th class="has-text-white has-background-info">Speed</th>
            </thead>
            <tbody>
              <tr>
                <td>{{ hp }}</td>
                <td>{{ attack }}</td>
                <td>{{ defense }}</td>
                <td>{{ sattack }}</td>
                <td>{{ sdefense }}</td>
                <td>{{ speed }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="colums">
        <h4 class="has-text-white">Moves</h4>
        <div class="tags">
          <span v-for="move in data.moves" :key="move.move.name" class="tag">
            {{ move.move.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/utils/api';

export default {
  props: {
    id: {
      required: true,
      type: [Number, String],
    },
  },
  data() {
    return {
      data: {},
      empty: false,
      isLoading: true,
    };
  },
  methods: {
    getPokemon(id) {
      api.getPokemon(id)
        .then((response) => {
          this.isLoading = false;
          this.data = response.data;
        })
        .catch((error) => {
          this.isLoading = false;
          this.empty = true;
          console.log(error);
        });
    },
    filterStats(key) {
      const stat = this.data.stats.filter(item => item.stat.name === key);

      if (stat.length > 0) {
        return stat[0].base_stat;
      }
      return 'Pending';
    },
  },
  mounted() {
    this.getPokemon(this.id);
  },
  computed: {
    hp() {
      return this.filterStats('hp');
    },
    attack() {
      return this.filterStats('attack');
    },
    defense() {
      return this.filterStats('defense');
    },
    sattack() {
      return this.filterStats('special-attack');
    },
    sdefense() {
      return this.filterStats('special-defense');
    },
    speed() {
      return this.filterStats('speed');
    },
  },
  filters: {
    standarazie(value) {
      return value / 10;
    },
    capitalizeFirstLetter(text) {
      return text.replace(/^\w/, c => c.toUpperCase());
    },
  },
};
</script>
<style lang="scss" scoped>
.details, .name {
  color: #fff;
}

.empty {
  text-align: center;
}
.emotion {
  display: block;
  text-align: center;
  i:before {
    font-size: 8rem;
  }
}
.responsive-table {
  overflow-x: auto;
}
</style>
