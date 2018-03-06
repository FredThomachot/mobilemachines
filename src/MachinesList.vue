<template>
    <div>
       <h1>Liste des machines</h1>
        <p v-for="machine in machines"><template-machine :name="machine.name" :status="machine.status" :checkedAt="machine.checkedAt"> </template-machine></p>
   </div>

</template>

<script>
    export default {
        data() {
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
        background-color: aliceblue;
    }




</style>