<template>
<div>
  <h3>Add Employee</h3>

  <h3>Employees</h3>
  <!-- TODO: Fetch from csv and put into employee.x -->
    <div
    v-for="employee in sortedEmployees"
    v-bind:key="employee.id"
    class="collection"
    >

    <div class="collection-item">
    <table style="margin: 0 auto;">
      <tbody>
        <tr>
          <td>
            Name:<br>
            {{employee.name}}</td>
          <td>
            Hours:<br>
          {{employee.totalhours}}</td>
          <td>
            Type:<br>
          {{employee.type}}</td>
        </tr>
      </tbody>
    </table>
    </div>

  </div>
    <button type="button" class="btn btn-default">Import CSV</button>
</div>
</template>

<script>
import db from '@/db'

export default {
  name: 'Employees',
  data() {
    return {
      employees: []
    }
  },
  computed: {
    sortedEmployees() {
      return this.employees.slice().sort((a, b) => {
        return a.id - b.id
      })
    }
  },
  created() {
    db.collection('employees').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.employees.push(doc.data())
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
