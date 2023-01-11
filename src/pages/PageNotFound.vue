<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <section class="relative">
        <div class="max-w-6xl px-4 mx-auto sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="max-w-3xl mx-auto text-center">
              <!-- Top image -->
              <div class="relative inline-flex flex-col mb-6" data-aos="fade-up">
                <img
                  class="rounded-full"
                  src="../images/yp/logo.png"
                  width="196"
                  height="196"
                  alt="404"
                />
              </div>
              <!-- 404 content -->
              <h1 class="mb-4 h1" data-aos="fade-up" data-aos-delay="200">
                페이지를 찾을 수 없습니다.
              </h1>
              <p class="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="400">
                <button
                  class="text-white bg-blue-600 rounded-md cursor-pointer sm:w-1/2 md: mt-7 btn hover:bg-blue-700 disabled:opacity-25 md:w-1/4"
                  @click="$router.push({ path: '/' })"
                >
                  메인페이지로<br />
                  이동
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './../partials/Header.vue';
import Footer from './../partials/Footer.vue';

export default {
  name: 'Features',
  components: {
    Header,
    Footer,
  },
};
</script>
