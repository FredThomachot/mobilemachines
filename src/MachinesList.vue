<template>
    <div>
       <h1>Liste des machines</h1>
        <p><template-machine :name="name" :status="status" :checkedAt="checkedAt"> </template-machine></p>
   </div>

</template>

<script>
    export default {
        data() {
            return {
                name: 'Whatelse ?!',
                status: true,
                checkedAt: new Date().toLocaleString()
            }
        }
    }

</script>



<style scoped>

    h1 {
        color: #35495e;
        font-family: fantasy;
    }

    p {
        border: limegreen;
        border-style: groove;
    }



</style>