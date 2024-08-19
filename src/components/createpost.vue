<template>
    <h1> click the following button to send post</h1>
    <form @sumbit.prevent="createpost">
   <div>
    <label for="id">enter id </label>
    <input type="text" v-model="formdata.id">
   </div>
   <div>
    <label for="title">enter title</label>
    <input type="text" v-model="formdata.title">
   </div>
   <div>
    <label for="body">enter body </label>
    <input type="text" v-model="formdata.body">
   </div>
   <button>submit</button>
    </form>
</template>
<script>
import axios from 'axios';
export default{
    name:'createpost',
    data(){
       return { formdata:{
        id:'',
        title:'',
        body:''
       },
        error:''}
    },
    methods:{
        getpo(){
            axios.post('https://jsonplaceholder.typicode.com/posts',this.formdata)
            .then(response=>console.log(response)
            ).catch((error)=>{
                this.error=error;
            })
        }
    }
}
</script>