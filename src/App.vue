

<template>

  <div id="app">
      <h1>Centre de réparation des machines</h1>
    <a href="/#/"><img src="./assets/logo.jpg"></a>

    <div>
      <h1>Que voulez vous faire ?</h1>

        <router-link to="/list" tag="button">Consulter la liste des machines</router-link>
        <router-link to="/map" tag="button">Voir la carte</router-link>

    </div>

    <router-view></router-view>

  </div>

</template>

<script>




   /* export default {
      name: 'app',
    }*/

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
    margin: 5px;
    padding: 15px;
    border-radius: 4px;
    font-family: Calibri;
    font-size: 16px;
    color: white;
}
.router-link-active {
    background-color: #35495e;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
    font-family: fantasy;
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
