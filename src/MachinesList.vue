<template>
    <div>
       <h1>Liste des machines</h1>
        <p v-for="machine in machines">
          <template-machine :name="machine.name" :status="machine.status" :checkedAt="machine.checkedAt"> </template-machine></p>
   </div>

</template>

<script>

  import axios from 'axios'

    export default {
      created() {
        axios.get("https://machine-api-campus.herokuapp.com/api/machines")
          .then(response => {
            this.machines = response.data;
          })
      },
      data() {
        return {
          machines: [/*{
            id: 1,
            name: 'Whatelse ?!',
            status: true,
            checkedAt: new Date().toLocaleString()
          }, {
            id: 2,
            name: 'Brokken',
            status: false,
            checkedAt: new Date().toLocaleString()
          }*/]
        }
      },


    }

</script>



<style scoped>

    h1 {
        color: #35495e;
        font-family: fantasy;
    }

    p {

        border-style: groove;
        margin: auto;
        width:50%;
        margin-bottom: 10px;
    }




</style>
