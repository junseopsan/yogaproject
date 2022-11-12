<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="py-12 border-t border-gray-800 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20  ">
          <h2 class="h2" data-aos="fade-up">요가프로젝트 이야기</h2>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none  ">
          <div class="grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
            <!-- 1st article -->
            <article class="flex flex-col h-full" data-aos="fade-up">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-01.jpg"
                      width="352"
                      height="198"
                      alt="News 01"
                    />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap -m-1 text-xs font-medium">
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-purple-600 rounded-full hover:bg-purple-700"
                        href="#0"
                        >Product</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600"
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="mb-2 h4">
                  <router-link
                    to="/blog-post"
                    class="transition duration-150 ease-in-out hover:text-gray-100"
                    >The quick brown fox jumped over the lazy dog.</router-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-400 grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="mr-4 rounded-full shrink-0"
                    src="../images/news-author-01.jpg"
                    width="40"
                    height="40"
                    alt="Author 01"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                    href="#0"
                    >Anastasia Dan</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 17, 2020</span>
                </div>
              </footer>
            </article>

            <!-- 2nd article -->
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-02.jpg"
                      width="352"
                      height="198"
                      alt="News 02"
                    />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap -m-1 text-xs font-medium">
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-pink-500 rounded-full hover:bg-pink-600"
                        href="#0"
                        >Desing</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600"
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="mb-2 h4">
                  <router-link
                    to="/blog-post"
                    class="transition duration-150 ease-in-out hover:text-gray-100"
                    >The quick brown fox jumped over the lazy dog.</router-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-400 grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="mr-4 rounded-full shrink-0"
                    src="../images/news-author-02.jpg"
                    width="40"
                    height="40"
                    alt="Author 02"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                    href="#0"
                    >Markus Barker</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 12, 2020</span>
                </div>
              </footer>
            </article>

            <!-- 3rd article -->
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-03.jpg"
                      width="352"
                      height="198"
                      alt="News 03"
                    />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap -m-1 text-xs font-medium">
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-purple-600 rounded-full hover:bg-purple-700"
                        href="#0"
                        >Product</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-teal-500 rounded-full hover:bg-teal-600"
                        href="#0"
                        >Tutorials and articles</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="mb-2 h4">
                  <router-link
                    to="/blog-post"
                    class="transition duration-150 ease-in-out hover:text-gray-100"
                    >The quick brown fox jumped over the lazy dog.</router-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-400 grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="mr-4 rounded-full shrink-0"
                    src="../images/news-author-03.jpg"
                    width="40"
                    height="40"
                    alt="Author 03"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                    href="#0"
                    >Lisa Crockett</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 9, 2020</span>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'News',
};
</script>
