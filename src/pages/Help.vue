<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <div x-data="{ page: '1' }" class="flex flex-col md:flex-row">
            <!-- Main content -->
            <main class="order-1 md:flex-auto md:pl-10" data-aos="fade-up">
              <!-- FAQ’s – Frequently Asked Questions -->
              <div v-show="page === '1'">
                <div class="mb-8">
                  <h2 class="mb-4 h2">FAQ’s – Frequently Asked Questions</h2>
                  <p class="text-gray-400">
                    Last updated - <span class="text-purple-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I use Open PRO without registration?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I import my sitemap to Open PRO?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I switch my subscription between essential, and premium
                      plans?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I cancel my subscription at any time?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What happens if I don’t renew my license after one year?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- What is Open PRO -->
              <div v-show="page === '2'">
                <div class="mb-8">
                  <h2 class="mb-4 h2">What is Open PRO</h2>
                  <p class="text-gray-400">
                    Last updated - <span class="text-purple-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I use Open PRO without registration?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I import my sitemap to Open PRO?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I switch my subscription between essential, and premium
                      plans?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I cancel my subscription at any time?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What happens if I don’t renew my license after one year?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- Open PRO plan’s features -->
              <div v-show="page === '3'">
                <div class="mb-8">
                  <h2 class="mb-4 h2">Open PRO plan’s features</h2>
                  <p class="text-gray-400">
                    Last updated - <span class="text-purple-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I use Open PRO without registration?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I import my sitemap to Open PRO?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I switch my subscription between essential, and premium
                      plans?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I cancel my subscription at any time?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What happens if I don’t renew my license after one year?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- Get started -->
              <div v-show="page === '4'">
                <div class="mb-8">
                  <h2 class="mb-4 h2">Get started</h2>
                  <p class="text-gray-400">
                    Last updated - <span class="text-purple-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I use Open PRO without registration?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I import my sitemap to Open PRO?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I switch my subscription between essential, and premium
                      plans?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I cancel my subscription at any time?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What happens if I don’t renew my license after one year?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- Payments FAQ’s -->
              <div v-show="page === '5'">
                <div class="mb-8">
                  <h2 class="mb-4 h2">Payments FAQ’s</h2>
                  <p class="text-gray-400">
                    Last updated - <span class="text-purple-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I use Open PRO without registration?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I import my sitemap to Open PRO?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      How can I switch my subscription between essential, and premium
                      plans?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Can I cancel my subscription at any time?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What happens if I don’t renew my license after one year?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="mb-2 text-xl font-medium">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>
            </main>

            <!-- Nav sidebar -->
            <aside
              class="mb-16 md:w-64 md:mb-0 md:mr-10 md:shrink-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 class="px-3 pb-3 text-lg font-medium border-b border-gray-800">
                Choose a category
              </h4>
              <nav>
                <ul>
                  <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-purple-600': page === '1' }"
                      class="flex items-center px-3 text-gray-400 transition duration-150 ease-in-out group hover:text-purple-600"
                      href="#0"
                      @click.prevent="page = '1'"
                    >
                      <span>Frequently Asked Questions</span>
                      <svg
                        class="w-3 h-3 ml-2 transition duration-150 ease-in-out transform opacity-0 fill-current shrink-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-purple-600': page === '2' }"
                      class="flex items-center px-3 text-gray-400 transition duration-150 ease-in-out group hover:text-purple-600"
                      href="#0"
                      @click.prevent="page = '2'"
                    >
                      <span>What is Open PRO</span>
                      <svg
                        class="w-3 h-3 ml-2 transition duration-150 ease-in-out transform opacity-0 fill-current shrink-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-purple-600': page === '3' }"
                      class="flex items-center px-3 text-gray-400 transition duration-150 ease-in-out group hover:text-purple-600"
                      href="#0"
                      @click.prevent="page = '3'"
                    >
                      <span>Open PRO plan’s features</span>
                      <svg
                        class="w-3 h-3 ml-2 transition duration-150 ease-in-out transform opacity-0 fill-current shrink-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-purple-600': page === '4' }"
                      class="flex items-center px-3 text-gray-400 transition duration-150 ease-in-out group hover:text-purple-600"
                      href="#0"
                      @click.prevent="page = '4'"
                    >
                      <span>Get started</span>
                      <svg
                        class="w-3 h-3 ml-2 transition duration-150 ease-in-out transform opacity-0 fill-current shrink-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-purple-600': page === '5' }"
                      class="flex items-center px-3 text-gray-400 transition duration-150 ease-in-out group hover:text-purple-600"
                      href="#0"
                      @click.prevent="page = '5'"
                    >
                      <span>Payments FAQ’s</span>
                      <svg
                        class="w-3 h-3 ml-2 transition duration-150 ease-in-out transform opacity-0 fill-current shrink-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>
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
  name: 'Help',
  components: {
    Header,
    PageIllustration,
    Footer,
  },
  data: function () {
    return {
      page: '1',
    };
  },
};
</script>
