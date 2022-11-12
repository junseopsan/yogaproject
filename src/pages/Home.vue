<template>
  <div class="flex flex-col min-h-screen overflow-hidden font-gamja-flower">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page sections -->
      <HeroHome />
      <Process />
      <News />
      <Newsletter />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './../partials/Header.vue';
import PageIllustration from './../partials/PageIllustration.vue';
import HeroHome from './../partials/HeroHome.vue';
import Process from './../partials/Process.vue';
import FeaturesHome from './../partials/FeaturesHome.vue';
import Tabs from './../partials/Tabs.vue';
import Target from './../partials/Target.vue';
import News from './../partials/News.vue';
import Newsletter from './../partials/Newsletter.vue';
import Footer from './../partials/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    PageIllustration,
    HeroHome,
    Process,
    FeaturesHome,
    Tabs,
    Target,
    News,
    Newsletter,
    Footer,
  },
};
</script>
