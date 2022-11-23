<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page sections -->
      <BlogSingle />
      <!-- <Newsletter /> -->
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './../partials/Header.vue';
import BlogSingle from '../partials/BlogSingle.vue';
import Newsletter from '../partials/Newsletter.vue';
import Footer from './../partials/Footer.vue';

export default {
  name: 'BlogPost',
  components: {
    Header,
    BlogSingle,
    Newsletter,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
