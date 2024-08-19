<template>
    <h1>retrieved posts {{ greet }} {{ count}} {{ first }}{{ last }}</h1>
    <button @click="api">increase</button>  
    <button @click="apii">change names</button>  <h2> {{ firstn }} {{ name }}{{ nme }}</h2>
    
    <button @mouseover="counter"> click to increase {{ count }} </button>
    <h2>{{ names }}</h2>
    
    </template>
    
    
    <script >
    import {ref,reactive,toRefs} from 'vue';
    import countermi from '../mixins/countermixin';
    export default {
        setup(){
            const names=ref('fantastic');
            names.value='kigali';
            const greet=`hello from gatagara my name is ${names.value}`;
            const state=reactive({
                name:'ali',
                nme:'biz',
                first:'ali',
                last:'biz'
            });
            
    const firstn=ref('hello firstn');
    const count=ref(0)
    function api() {
        count.value++
    };
    function apii() {
        state.last='myname',
        state.last='king'
    };
   
    
    setTimeout(() => { 
        
        firstn.value='kinyatrap' 

    }, 2000)
      return{
                names, greet,firstn,count,api,apii,
                ...toRefs(state)
            }
        },
        name:'hover',
        mixins:[countermi],
      
      
      
    }
    </script>
    
    <style scoped>
    
    </style>
    