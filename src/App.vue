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
import Header from '@/components/Header.vue';
import AppNav from '@/components/AppNav.vue';

export default {
  components: {
    Header,
    AppNav,
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";
html {
  background-color: #000;
}
#app {
  margin: 10px;
}
.pokedex {
  border-radius: 15px;
  width: 100%;
  height: 100vh;
  background-color: #C9172C;
  box-shadow: 0px 2px 0px 5px #860F1D;
  margin: 0 auto;
  max-width: 900px;
}
.display {
  border-radius: 7px;
  display: block;
  background-color: #DEDEDE;
  border: solid 8px #C9172C;
  width: 100%;
  max-height: 80vh;
  padding: 10px;
  height: 100%;
  overflow: hidden;
}

.screen {
  background-color: #232323;
  width: 100%;
  height: 90%;
  overflow: scroll;
  margin-top: 10px;
  padding: 5px;
}
</style>
