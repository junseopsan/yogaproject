<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <div class="relative h-0 max-w-6xl mx-auto pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <section class="relative">
        <div class="max-w-6xl px-4 mx-auto sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
              <h1 class="mb-4 h1">Forgot your password?</h1>
              <p class="text-xl text-gray-400">
                We'll email you instructions on how to reset it.
              </p>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <form>
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="email"
                      >Email</label
                    >
                    <input
                      id="email"
                      type="email"
                      class="w-full text-gray-300 form-input"
                      placeholder="you@yourcompany.com"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-wrap mt-6 -mx-3">
                  <div class="w-full px-3">
                    <button
                      class="w-full text-white bg-purple-600 btn hover:bg-purple-700"
                    >
                      Reset Password
                    </button>
                  </div>
                </div>
              </form>
              <div class="mt-6 text-center text-gray-400">
                <router-link
                  to="/signin"
                  class="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                  >Cancel</router-link
                >
              </div>
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
import PageIllustration from '../partials/PageIllustration.vue';
import Footer from './../partials/Footer.vue';

export default {
  name: 'ResetPassword',
  components: {
    Header,
    PageIllustration,
    Footer,
  },
};
</script>
