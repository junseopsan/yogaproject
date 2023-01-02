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
  apiKey: process.env.VITE_FIREBASE_APIKEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
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
