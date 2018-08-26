import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';


Vue.component(Buefy.Autocomplete.name, Buefy.Autocomplete);
Vue.component(Buefy.Field.name, Buefy.Field);
Vue.component(Buefy.Loading.name, Buefy.Loading);
Vue.component(Buefy.Icon.name, Buefy.Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
