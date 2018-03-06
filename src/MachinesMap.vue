<template>
    <div>
        <h1>Carte des machines</h1>
      <gmap-map
        :center="{lat:	37.773972, lng:	-122.431297}"
        :zoom="10"
        style="width: 100%; height: 800px"
      >
      </gmap-map>
    </div>
</template>

<script></script>

<style scoped>

    h1 {
        color: #35495e;
        font-family: fantasy;
    }


</style>
