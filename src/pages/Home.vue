<template>
  <div class="flex flex-col min-h-screen overflow-hidden font-nanum-myeongjo">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page sections -->
      <HeroHome />
      <!-- <Faqs /> -->
      <News />
      <Contact />
      <Spinner />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './../partials/Header.vue';
import Contact from './../partials/Contact.vue';
import PageIllustration from './../partials/PageIllustration.vue';
import HeroHome from './../partials/HeroHome.vue';
import FeaturesHome from './../partials/FeaturesHome.vue';
import Tabs from './../partials/Tabs.vue';
import Faqs from './../partials/Faqs.vue';
import Target from './../partials/Target.vue';
import News from './../partials/News.vue';
import Spinner from './../partials/Spinner.vue';
import Newsletter from './../partials/Newsletter.vue';
import Footer from './../partials/Footer.vue';
import PricingTables from './../partials/PricingTables.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Contact,
    PageIllustration,
    HeroHome,
    Faqs,
    Spinner,
    PricingTables,
    // Process,
    FeaturesHome,
    Tabs,
    Target,
    News,
    Newsletter,
    Footer,
  },
};
</script>
