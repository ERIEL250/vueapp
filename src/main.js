import { createApp } from 'vue'
import './style.css'

import App from './App.vue';

const app=createApp(App);
import parent from './components/parent.vue';
app.component('parent',parent);
import hover from './components/hover.vue';
app.component('hover',hover);

app.mount('#app')
