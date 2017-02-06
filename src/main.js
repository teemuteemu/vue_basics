import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routesDef from './routes';
import storeDef from './store';

import App from './components/App';

import './styles/index.css';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeDef);
const router = new VueRouter(routesDef);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
