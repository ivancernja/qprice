import Vue from 'vue';
import Router from 'vue-router';
import Employees from '@/components/Employees';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employees',
      component: Employees,
    },
  ],
});
