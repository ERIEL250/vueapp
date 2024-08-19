<template>
   <div> child component</div>
    </template>
    
    
    <script >
    
    export default {
        name:'child',
        beforeCreate(){
        console.log('before create child component')
    },
    Created(){
        console.log(' created child component')
    },
    beforeMount(){
        console.log('before mount child component')
    },
    mounted(){
        console.log('mounted child component')
    },
    beforeUpdate(){
        console.log('before update child component')
    },
    updated(){
        console.log('updated child component')
    },
    beforeUnmount(){
        console.log('before unmount child component')
    },
    unmount(){
        console.log('unmount child component')
    }
     
    }
    </script>
    
    <style scoped>
    
    </style>
    