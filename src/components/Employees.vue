<template>
<div>
  <h3>Add Employee</h3>

  <h3>Employees</h3>
  <!-- TODO: Fetch from csv and put into employee.x -->
    <table style= "margin: 0 auto;">
      <thead>
        <tr>
          <th>
            Name:
          </th>
          <th>
            Hours:
          </th>
          <th>
            Type:
          </th>
        </tr>
      </thead>
      <tbody >
        <tr
          v-for="employee in sortedEmployees"
          v-bind:key="employee.id"
          class="collection"
        >
          <td>
            {{employee.name}}
          </td>
          <td>
          {{employee.totalhours}}
          </td>
          <td>
          {{employee.type}}
          </td>
        </tr>
      </tbody>
    </table>

    <xls-csv-parser :columns="columns" @on-validate="onValidate" :help="help" lang="en"></xls-csv-parser>
    <br><br>
    <div class="results" v-if="results">
      <h3>Results:</h3>
      <pre>{{ JSON.stringify(results, null, 2) }}</pre>
    </div>


</div>
</template>

<script>
    import db from '@/db'
    import { XlsCsvParser } from 'vue-xls-csv-parser'    

    export default {
      name: 'Employees',
      components: {
        XlsCsvParser,
      },
      data() {
        return {
          employees: [],
          columns: [
          { name: 'Student login', value: 'login' },
          { name: 'Student firstname', value: 'firstname' },
          { name: 'Student lastname', value: 'lastname' },
          { name: 'Other', value: 'other', isOptional: true },
          ],
          results: null,
          help: 'Necessary columns are: login, firstname and lastname',
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
      },
      methods: {
      onValidate(results) {
        this.results = results;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Transfer to SASS*/
    h1, h2 {
      font-weight: normal;
    }


</style>