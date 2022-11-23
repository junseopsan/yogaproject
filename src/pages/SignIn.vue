<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <section class="relative">
        <div class="max-w-6xl px-4 mx-auto sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
              <h1 class="h1">어서오세요.</h1>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <form>
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full px-3">
                    <button
                      class="relative flex items-center w-full px-0 text-white bg-red-600 btn hover:bg-red-700"
                    >
                      <svg
                        class="w-4 h-4 mx-4 text-white opacity-75 fill-current shrink-0"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                        />
                      </svg>
                      <span
                        class="flex items-center h-6 mr-4 border-r border-white border-opacity-25"
                        aria-hidden="true"
                      ></span>
                      <span class="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                    </button>
                  </div>
                </div>
              </form>
              <div class="flex items-center my-6">
                <div
                  class="mr-3 border-t border-gray-700 border-dotted grow"
                  aria-hidden="true"
                ></div>
                <div class="text-gray-400">Or, sign in with your email</div>
                <div
                  class="ml-3 border-t border-gray-700 border-dotted grow"
                  aria-hidden="true"
                ></div>
              </div>
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
                      autocomplete
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="password"
                      >Password</label
                    >
                    <input
                      id="password"
                      type="password"
                      class="w-full text-gray-300 form-input"
                      placeholder="Password (at least 10 characters)"
                      autocomplete
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <div class="flex justify-between">
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" />
                        <span class="ml-2 text-gray-400">Keep me signed in</span>
                      </label>
                      <router-link
                        to="/reset-password"
                        class="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                        >Forgot Password?</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap mt-6 -mx-3">
                  <div class="w-full px-3">
                    <button
                      class="w-full text-white bg-purple-600 btn hover:bg-purple-700"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
              <div class="mt-6 text-center text-gray-400">
                Don’t you have an account?
                <router-link
                  to="/signup"
                  class="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                  >Sign up</router-link
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
  name: 'SignIn',
  components: {
    Header,
    PageIllustration,
    Footer,
  },
};
</script>
