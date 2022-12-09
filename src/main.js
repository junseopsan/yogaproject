// import Vue from 'vue';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import base from './scripts/base';

import './css/additional-styles/flatpickr.css';
import 'flatpickr/dist/themes/dark.css';
import 'aos/dist/aos.css';
import './css/style.css';
import mitt from 'mitt';
import VueMobileDetection from 'vue-mobile-detection';
const emitter = mitt();
const app = createApp(App);

// app.use(VueTailwindDatepicker);
app.use(PrimeVue);
app.use(VueMobileDetection);
app.mixin(base);

app.use(router);
app.config.globalProperties.emitter = emitter;

app.mount('#app');
