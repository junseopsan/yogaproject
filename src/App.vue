<template>
  <router-view />
  <Toast />
  <Spinner />
</template>

<script>
import Toast from './partials/Toast.vue';
import Spinner from './partials/Spinner.vue';
import AOS from 'aos';

export default {
  components: {
    Toast,
    Spinner,
  },
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  },
};
</script>
