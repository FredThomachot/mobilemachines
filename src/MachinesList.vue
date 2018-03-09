<template>
    <div>
      <hr>
     <create-machine></create-machine>

      <hr>
       <h1>Liste des machines</h1>
       <!--<test-fred  :testdeprops="machine.name" v-for="machine in machines" ></test-fred>-->



        <p v-for="machine in machines">
          <fred-machine :name="machine.name" :status="machine.status" :checkedAt="machine.checkedAt"> </fred-machine></p>
   </div>

</template>

<script>

  import axios from 'axios'



export default {
  components: {},
  created() {
        axios.get("https://machine-api-campus.herokuapp.com/api/machines")
          .then(response => {
            this.machines = response.data;
          })
          .catch(error=> {
          this.error = error;});
      },
      data(){
        return {
          machines: [],
          loading: false,
          error: null,
           }
        }
  }




  /*data() {
    return {
      machines: [{
        id: 1,
        name: 'Whatelse ?!',
        status: true,
        checkedAt: new Date().toLocaleString()
      }, {
        id: 2,
        name: 'Brokken',
        status: false,
        checkedAt: new Date().toLocaleString()
      }]
    }*/

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
        margin-top: 10px;
    }




</style>
