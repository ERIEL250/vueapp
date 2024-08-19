<script setup>
 import getpost from './components/getpost.vue';
// import createpost from './components/createpost.vue';
//import parent from './components/parent.vue';
//import hover from './components/hover.vue';
//import clickcounter from './components/clickcounter.vue'

</script>
<template>
  <hover/>
  <clickcounter/>
  <parent name="eliel"/>
  <getpost/>
 
</template>
<script >
export default {
  components:{
    getpost,
   // createpost,
    parent
  },
  
}
</script>

<style scoped>

</style>








