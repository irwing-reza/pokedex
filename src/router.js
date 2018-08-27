import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () =>
        import(/* webpackChunkName: "not-found" */ './views/NotFound/index.vue'),
    },
    {
      path: '/',
      name: 'home',
      props: true,
      component: Home,
    },
    {
      path: '/search/:id',
      name: 'search',
      props: true,
      component: () =>
        import(/* webpackChunkName: "search" */ './views/Search/index.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      props: true,
      component: () =>
        import(/* webpackChunkName: "detail" */ './views/Detail/index.vue'),
    },
  ],
});
