<template>
    <h1>retrieved posts</h1>
    
    <button @click="counter"> click to increase {{ count }} </button>
    
    </template>
    
    
    <script >
    import {ref} from 'vue';
    import counterMixin from '../mixins/countermixin';
    export default {
        name:'clickcounter',
        mixins:[counterMixin],
        
        
      
      
    }
    </script>
    
    <style scoped>
    
    </style>
    