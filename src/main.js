import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import base from './scripts/base';
import { initializeApp } from 'firebase/app';

import './css/additional-styles/flatpickr.css';
import 'flatpickr/dist/themes/dark.css';
import 'aos/dist/aos.css';
import './css/style.css';
import mitt from 'mitt';
import VueMobileDetection from 'vue-mobile-detection';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDalqDVZUdbQuNQoJ0oyQk-CGd5540UWCk',
  authDomain: 'sinsayogaproject-99afb.firebaseapp.com',
  databaseURL:
    'https://sinsayogaproject-99afb-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'sinsayogaproject-99afb',
  storageBucket: 'sinsayogaproject-99afb.appspot.com',
  messagingSenderId: '980708560759',
  appId: '1:980708560759:web:7e984656a917a752329b72',
  measurementId: 'G-BEFCHDMQG8',
};
const emitter = mitt();

const fireApp = initializeApp(firebaseConfig);
export const db = getFirestore(fireApp);

const app = createApp(App);

app.use(PrimeVue);
app.use(VueMobileDetection);

app.mixin(base);
app.use(router);
app.config.globalProperties.emitter = emitter;

app.mount('#app');
