<template>
    <div>
        <h1>Carte des machines</h1>
        <gmap-map
                :center="center"
                :zoom="7"
                style="width: 500px; height: 300px"
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