<template>
  <div>
    <input type="text">
    <p>{{message}}</p>
    <p>{{testdeprops}}</p>

  </div>

</template>

<script>
    export default {
        name: "test.vue",
      props:['testdeprops'],
      data(){
          return {
            message: 'test test test'
          }
      }
    }
</script>

<style scoped>

</style>
