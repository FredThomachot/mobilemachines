<template>

    <div>
        <div id="machine">
            <h1>Machine name : "{{ name }}"</h1>
        </div>
        <div id="status">
            <h3 v-if="status == false" class="false" >Status KO</h3>
            <h3 v-else class="true">Status OK</h3>
        </div>
        <div id="time">
            <h5>last time checked : {{ checkedAt }} </h5>
        </div>
    </div>

</template>

<script>

export default {

    props: ['name', 'status', 'checkedAt'],


}

</script>


<style scoped>

    h1 {
        color: #35495e;
        font-family: fantasy;
    }

    .false {
        color: red;
    }

    .true {
        color: lawngreen;
    }



</style>

