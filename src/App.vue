<template>
  <div class="container">
    <div id="app">
      <div class="pokedex">
        <Header />
        <div class="display">
          <AppNav />
          <div class="screen">
            <router-view :key="$route.fullPath" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header/index.vue';
import AppNav from '@/components/AppNav/index.vue';

export default {
  components: {
    Header,
    AppNav,
  },
};
</script>

<style lang="scss">
@import "~./styles.scss";
</style>
