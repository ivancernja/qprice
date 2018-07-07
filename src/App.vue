<template>
  <div id="app">
    <app-sidebar>
    </app-sidebar>
    <router-view/>
  </div>
</template>

<script>
import Employees from '@/components/Employees.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    'app-employees': Employees,
    'app-sidebar': Sidebar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
