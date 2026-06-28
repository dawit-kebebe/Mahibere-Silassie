import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaColada } from '@pinia/colada';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
import { router } from './router';

addIcons(FaFlag, RiZhihuFill);

const pinia = createPinia()
const app = createApp(App);

pinia.use(piniaPluginPersistedstate)

app.use(pinia);
app.use(i18n);
app.use(PiniaColada, {
  queryOptions: {
    // Data stays fresh for 5 minutes
    staleTime: 1000 * 60 * 5,
  },
  mutationOptions: {
    // Global mutation options
  },
})
app.use(router);
app.component("v-icon", OhVueIcon);

app.mount("#app");