<template>
    <div>
        <h1>Carte des machines</h1>
      <gmap-map class="map"
                :center="{lat:	37.773972, lng:	-122.431297}"
                :zoom="12"
                style="width: 100%; height: 800px"
      >
        <gmap-marker
                :key="index"
                v-for="machine in machines"
                :position="{lat:machine.latitude, lng:machine.longitude}"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        machines: [{
          id: 1,
          latitude: 37.751586275,
          longitude: -122.447721511,
        },
          {
            id: 2,
            latitude: 37.828125,
            longitude: -122.422844,
          },
          {
            id: 3,
            latitude: 37.759773,
            longitude: -122.427063,
          }]

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
      max-width:50%;
    }

</style>
