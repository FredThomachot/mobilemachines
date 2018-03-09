<template>
    <div>
        <h1>Carte des machines</h1>
      <gmap-map class="map"
                :center="{lat:	45.188529 , lng:5.724524}"
                :zoom="12"
                style="width: 100%; height: 800px"
      >
        <gmap-marker
                :key="index"
                v-for="machine in machines"
                :position="{lat:Number(machine.latitude), lng:Number(machine.longitude)}"
                :clickable="true"
                :draggable="false"
                @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
</template>

<script>

  import axios from 'axios'

  export default {
    created() {
      axios.get("https://machine-api-campus.herokuapp.com/api/machines")
        .then(response => {
          console.log(response.data);
          this.machines = response.data;
        })
    },
    data() {
      return {
        machines: [/*{
          id: 1,
          latitude: 37.751586275,
          longitude: -122.447721511,
        },
          {
            id: 2,
            latitude: 37.828125,
            longitude: -122.422844,
          }*/]

      }
    }
  }



</script>

<style scoped>

    h1 {
        color: #35495e;
        font-family: fantasy;
    }
    .map {
      margin: auto;
      max-width:60%;

    }

</style>
