import Vue from 'vue';
import Router from 'vue-router';
import Employees from '@/components/Employees';
import Sidebar from '@/components/Sidebar'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employees',
      component: Employees,
    },
    {
    	path: '/',
    	name: 'Sidebar',
    	component: Sidebar,
    }
  ],
});
