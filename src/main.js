import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import App from './App';

import Home from './views/Home';
import Pets from './views/Pets';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/pets', component: Pets },
];
const router = new VueRouter({ routes });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});
