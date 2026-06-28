import { createApp } from 'vue'
import './style.css'

import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
// import { router } from './router';


addIcons(FaFlag, RiZhihuFill);

const app = createApp(App);
// app.use(router);
app.component("v-icon", OhVueIcon);

app.mount("#app");