<template>
  <div>
    <List :items="items" />
    <b-loading :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>
<script>
import utils from '@/utils/';

import List from '../../components/List/index.vue';

export default {
  components: {
    List,
  },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      items: [],
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    const pokemons = localStorage.getItem('pokemons');
    const data = JSON.parse(pokemons);
    this.items = utils.filterData(this.id, data);
    this.isLoading = false;
  },
};
</script>

