<template>
    <div> child2 component</div>
     </template>
     
     
     <script >
     
     export default {
         name:'child2',
         beforeCreate(){
         console.log('before create child2 component')
     },
     Created(){
         console.log(' created child2 component')
     },
     beforeMount(){
         console.log('before mount child2 component')
     },
     mounted(){
         console.log('mounted child2 component')
     },
     beforeUpdate(){
         console.log('before update child2 component')
     },
     updated(){
         console.log('updated child2 component')
     },
     beforeUnmount(){
         console.log('before unmount child2 component')
     },
     unmount(){
         console.log('unmount child2 component')
     }
      
     }
     </script>
     
     <style scoped>
     
     </style>
     