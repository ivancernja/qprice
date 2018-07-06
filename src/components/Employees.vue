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

<!-- Enter name; Enter hours; Dropdown type -->
    
    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h1>Upload CSV</h1>
        <button type="button" class="btn btn-dark" v-on:click="fileUpload">Upload</button>
          <input :ref="'inputField'" type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file" hidden>
            <p v-if="isInitial">
              Upload TW CSV
            </p>
            <p v-if="isSaving">
              Uploading {{ fileCount }} files...
            </p>
  
      </form>
       <div v-if="isSuccess">
        <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Upload again</a>
        </p>
        <ul class="list-unstyled">
          <li v-for="item in uploadedFiles">
            <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
          </li>
        </ul>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>Upload failed.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Try again</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>
    </div>
</div>
</template>

<script>
    import db from '@/db'
    // Fake service
    import {upload} from '@/file-upload.fake.service';
    // Real service
    // import {upload} from '@/file-upload.service'

    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
    

    export default {
      name: 'Employees',
      data() {
        return {
          employees: [],
          uploadedFiles: [],
          uploadError: null,
          currentStatus: null,
          uploadFieldName: 'photos'
        }
      },
      computed: {
        sortedEmployees() {
          return this.employees.slice().sort((a, b) => {
            return a.id - b.id
          })
        },
        isInitial() {
        return this.currentStatus == STATUS_INITIAL;
        },
        isSaving() {
          return this.currentStatus == STATUS_SAVING;
        },
        isSuccess() {
          return this.currentStatus == STATUS_SUCCESS;
        },
        isFailed() {
          return this.currentStatus == STATUS_FAILED;
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
      reset() {
        // reset form
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;

        upload(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED
          });
      },
      filesChange(fieldName, fileList) {
        const formData = new FormData();

        if (!fileList.length) return;

        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

        this.save(formData);
      },
      fileUpload() {
      this.$refs.inputField.click()
    }
    },
    mounted() {
      this.reset();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
      font-weight: normal;
    }

</style>