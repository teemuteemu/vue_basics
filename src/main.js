import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routes from './routes';
import storeDef from './store';

import App from './components/App';
import './styles/index.css';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeDef);
const router = new VueRouter({routes});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});
