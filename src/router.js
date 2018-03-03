import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Lista from './components/Lista';
import Usuarios from './components/Usuarios';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lista',
      name: 'Lista',
      component: Lista
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios
    }
  ]
});
