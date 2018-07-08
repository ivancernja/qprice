<template>
<div>

  <button class=" btn btn-default " v-on:click="parser">
  </button>

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

</div>
</template>

<script>
    import db from '@/db'
    const myCsv = require('@/test.json')
    const myObjStr = JSON.stringify(myCsv);
    // https://www.npmjs.com/package/csvtojson - csvFilePath
    const csvFilePath='<path to csv file>'

    export default {
      name: 'Employees',
      data() {
        return {
          employees: [],
        }
      },
      computed: {
        sortedEmployees() {
          return this.employees.slice().sort((a, b) => {
            return a.id - b.id
          })
        }
      },
      methods: {
        parser: function() {
          console.log(myObjStr)
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
/* Transfer to SASS*/
    h1, h2 {
      font-weight: normal;
    }

    .results {
      widht: 500px;
    }

</style>