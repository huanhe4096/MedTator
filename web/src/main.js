import "primeicons/primeicons.css";
import './style.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import { useDataStore } from "./DataStore";
import { definePreset } from '@primevue/themes';
import Tooltip from 'primevue/tooltip';
import { theme } from './theme';
import packageJson from '../package.json';

// create the app
const app = createApp(App)

// add the ToastService to the app
app.use(ToastService);

// add pinia to the app
const pinia = createPinia()
app.use(pinia);

// bind the store to the window object
const store = useDataStore();
window.store = store;
// store.loadSettingsFromLocalStorage();
store.app_config = app_config;
store.version = packageJson.version;

// add the router to the app
app.use(router);

// bind router with store for navigation
router.beforeEach((to, from, next) => {
    // console.log('from', from, 'to', to);
    // set the store.current_page
    store.current_page = to.path.substring(1);
    next()
})

// add PrimeVue to the app
const my_theme = definePreset(Aura, theme);

app.use(PrimeVue, {
    theme: {
        preset: my_theme,
        options: {
        }
    }
});

// add the Tooltip directive to the app
app.directive('tooltip', Tooltip);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas, far, fab)
app.component('font-awesome-icon', FontAwesomeIcon)

// mount the app to the DOM
app.mount('#app')
