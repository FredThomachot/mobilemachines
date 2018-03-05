

<template>
  <div id="app">
      <img src="./src/assets/logo.jpg">

    <h1>Que voulez vous faire ?</h1>
      <button v-on:click="say('liste des machines')">Consulter la liste des machines</button>
      <button v-on:click="say('voir la carte')">Voir la carte</button>
      
    <machines-list></machines-list>
    <machines-map></machines-map>

   </div>


</template>

<script>
    import MachinesList from './MachinesList.vue'
    import MachinesMap from './MachinesMap.vue'

    export default {
      name: 'app',
        components:{
          'machines-list': MachinesList,
            'machines-map': MachinesMap
        },
      methods: {
        say: function (message) {
            alert(message)
         }
      }
    }

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
    background-color: #42b883;
    border: none;
    color: white;
    margin: 10px;
    padding: 15px;
    border-radius: 4px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
