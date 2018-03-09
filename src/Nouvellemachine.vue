<template>

    <div>

      <form @submit="ajouterMachine()" class="form">

        <input placeholder="nom" v-model="nouvellemachine.name"><br/>
        <input placeholder="latitude" v-model="nouvellemachine.latitude"><br/>
        <input placeholder="longitude" v-model="nouvellemachine.longitude"><br/>

        <select v-model="nouvellemachine.status" >
          <option v-bind:value="true">ON</option>
          <option v-bind:value="false">OFF</option>
        </select>
      </form>
      <button type="submit"  @click="ajouterMachine()" >Ajouter</button>

    </div>

</template>

<script>

  import axios from 'axios';

  export default{
    data(){
      return{
        nouvellemachine: {
          status:true,
          checkedAt: new Date().toLocaleString()
        },
      }
    },
    methods:{
      ajouterMachine:function(){
        axios.post('https://machine-api-campus.herokuapp.com/api/machines', {
          name:this.nouvellemachine.name,
          status:this.nouvellemachine.status,
          latitude:this.nouvellemachine.latitude,
          longitude:this.nouvellemachine.longitude,
          checkedAt:this.nouvellemachine.checkedAt

        })
          .then(function (response) {
            alert('machine created');
          })
          .catch(function (error) {

          });

      }
    },
    created(){
      console.log(this.nouvellemachine);

    }

  }

</script>




<style scoped>
  /*.form {
    margin: auto;
    max-width:18%;
  }

  .form-group {
    padding:10px;
  }*/

</style>
