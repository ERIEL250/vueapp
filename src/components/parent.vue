<template>
    <div> parent component {{ name }}
        <button @click="showchild = !showchild">show child or hide child</button>
        <child v-if="showchild"/>
        <child2 v-if="showchild"/>
       name <input type="text" ref="inputref">
        
    </div>
     </template>
     
     
     <script >
     import child from './child.vue';
     import child2 from './child2.vue';
     export default {
    name:'parent',
    props:['name'],
     components:{
            child,child2
         },
    data(){
        return {
          showchild:true
        }
    },
    beforeCreate(){
        console.log('before create parent component')
    },
    Created(){
        console.log(' created parent component')
    },
    beforeMount(){
        console.log('before mount parent component')
    },
    mounted(){
        console.log('mounted parent component'),
        this.$refs.inputref.focus()
    },
    beforeUpdate(){
        console.log('before update parent component')
    },
    updated(){
        console.log('updated parent component')
    },
    beforeUnmount(){
        console.log('before unmount parent component')
    },
    unmount(){
        console.log('unmount parent component')
    }
     }
     </script>
     
     <style scoped>
     
     </style>