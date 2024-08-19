

<template>
<h1>retrieved posts</h1>
name <input type="text" ref="inputref">
<button @click="getpos"> click to retrieve posts </button>
<div v-for="post in posts" :key="post.id">
    <h3>{{ post.id }} {{ post.title }}</h3>
    <p> {{ post.body }}</p> <hr/>
    <h3 v-if="errormsg">{{ errormsg }}</h3>
   

</div> <div><input type="text" ref="pet"> </div>
</template>


<script >
import axios from 'axios';
export default {

    
  name:'getposts',
  mounted(){
        console.log('mounted parent component'),
        this.$refs.inputref.focus()
    },
  data(){
    return{
        posts:[],
        errormsg:''
    }
  },
  methods:{
    getpos(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
           .then((response)=>{
            this.posts=response.data
           })
           .catch((error)=>{
            this.errormsg='error occured'
           })
    }
  }
  
}
</script>

<style scoped>

</style>
