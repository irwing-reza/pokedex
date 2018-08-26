<template>
<div class="nav">
  <b-autocomplete
    v-model="query"
    :data="filterData"
    clear-on-select
    placeholder="Type Pokemon Name"
    icon="magnify"
    field="name"
    expanded
    @select="setSelected">
      <template slot="empty">No results found</template>
  </b-autocomplete>
</div>
</template>
<script>
import api from '@/utils/api';
import utils from '@/utils/';

export default {
  data() {
    return {
      data: [],
      query: '',
      selected: '',
    };
  },
  methods: {
    fetchItems() {
      const pokemons = localStorage.getItem('pokemons');
      if (pokemons) {
        this.data = JSON.parse(pokemons);
      } else {
        api.getPokemons()
          .then((response) => {
            const data = response.data.objects[0].pokemon;
            localStorage.setItem('pokemons', JSON.stringify(data));
            this.data = data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    setSelected(option) {
      if (option) {
        this.$router.push({ name: 'search', params: { id: this.query, pokemons: this.filterData } });
      }
    },
  },
  computed: {
    filterData() {
      return utils.filterData(this.query, this.data);
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
<style lang="scss">

</style>
