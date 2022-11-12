<template>
  <section class="relative">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 text-center md:pb-20 md:text-left">
          <h1 class="h1" data-aos="fade-up">
            Refreshing news for developers and designers
          </h1>
        </div>

        <!-- Featured article -->
        <div class="pb-12 md:pb-20">
          <article
            class="grid items-center max-w-sm gap-6 mx-auto md:max-w-none md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16"
          >
            <router-link
              to="/blog-post"
              class="relative block group"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div
                class="absolute inset-0 hidden transition duration-700 ease-out transform bg-gray-800 pointer-events-none md:block md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0"
                aria-hidden="true"
              ></div>
              <figure
                class="relative h-0 overflow-hidden transition duration-700 ease-out transform pb-9/16 md:pb-3/4 lg:pb-9/16 md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"
              >
                <img
                  class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                  src="../images/blog-post-01.jpg"
                  width="540"
                  height="303"
                  alt="Blog post 01"
                />
              </figure>
            </router-link>
            <div data-aos="fade-left" data-aos-delay="200">
              <header>
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
                <h3 class="mb-2 text-2xl h3 lg:text-3xl">
                  <router-link
                    to="/blog-post"
                    class="transition duration-150 ease-in-out hover:text-gray-100"
                    >Designing a functional workflow at home.</router-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-400 grow">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="mr-4 rounded-full shrink-0"
                    src="../images/news-author-04.jpg"
                    width="40"
                    height="40"
                    alt="Author 04"
                  />
                </a>
                <div>
                  <a
                    class="font-medium text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                    href="#0"
                    >Chris Solerieu</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 19, 2020</span>
                </div>
              </footer>
            </div>
          </article>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <!-- Section title -->
          <h4 class="pb-6 mb-10 border-b border-gray-700 h4" data-aos="fade-up">
            Latest articles
          </h4>

          <!-- Articles container -->
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
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
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
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
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

            <!-- 4th article -->
            <article class="flex flex-col h-full" data-aos="fade-up">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-04.jpg"
                      width="352"
                      height="198"
                      alt="News 04"
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
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-green-500 rounded-full hover:bg-green-600"
                        href="#0"
                        >Culture</a
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
                    src="../images/news-author-05.jpg"
                    width="40"
                    height="40"
                    alt="Author 05"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                    href="#0"
                    >Alexandra Smith</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 7, 2020</span>
                </div>
              </footer>
            </article>

            <!-- 5th article -->
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-05.jpg"
                      width="352"
                      height="198"
                      alt="News 05"
                    />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap -m-1 text-xs font-medium">
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
                  <span class="text-gray-500">Jan 4, 2020</span>
                </div>
              </footer>
            </article>

            <!-- 6th article -->
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-06.jpg"
                      width="352"
                      height="198"
                      alt="News 06"
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
                    src="../images/news-author-06.jpg"
                    width="40"
                    height="40"
                    alt="Author 06"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                    href="#0"
                    >Anton Sebastian</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 2, 2020</span>
                </div>
              </footer>
            </article>

            <!-- 7th article -->
            <article class="flex flex-col h-full" data-aos="fade-up">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-07.jpg"
                      width="352"
                      height="198"
                      alt="News 07"
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
                  <span class="text-gray-500">Dec 24, 2019</span>
                </div>
              </footer>
            </article>

            <!-- 8th article -->
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-08.jpg"
                      width="352"
                      height="198"
                      alt="News 08"
                    />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap -m-1 text-xs font-medium">
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600"
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-green-500 rounded-full hover:bg-green-600"
                        href="#0"
                        >Culture</a
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
                  <span class="text-gray-500">Dec 12, 2019</span>
                </div>
              </footer>
            </article>

            <!-- 9th article -->
            <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/news-09.jpg"
                      width="352"
                      height="198"
                      alt="News 09"
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
                  <span class="text-gray-500">Dec 7, 2019</span>
                </div>
              </footer>
            </article>
          </div>
        </div>

        <!-- Pagination -->
        <nav
          class="flex justify-center pt-16"
          role="navigation"
          aria-label="Pagination Navigation"
        >
          <ul class="inline-flex flex-wrap -m-1 text-sm font-medium">
            <li class="m-1">
              <span
                class="inline-flex items-center justify-center h-10 px-4 text-gray-500 bg-gray-800 rounded-full min-w-10"
                >Prev</span
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex items-center justify-center h-10 px-2 text-gray-300 transition-colors duration-150 ease-in-out bg-gray-800 rounded-full min-w-10 hover:bg-purple-600"
                >1</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex items-center justify-center h-10 px-2 text-gray-300 transition-colors duration-150 ease-in-out bg-gray-800 rounded-full min-w-10 hover:bg-purple-600"
                >2</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex items-center justify-center h-10 px-2 text-gray-300 transition-colors duration-150 ease-in-out bg-gray-800 rounded-full min-w-10 hover:bg-purple-600"
                >3</a
              >
            </li>
            <li class="m-1">
              <span
                class="inline-flex items-center justify-center h-10 px-2 text-gray-500 bg-gray-800 rounded-full min-w-10"
                >...</span
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex items-center justify-center h-10 px-2 text-gray-300 transition-colors duration-150 ease-in-out bg-gray-800 rounded-full min-w-10 hover:bg-purple-600"
                >12</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex items-center justify-center h-10 px-4 text-gray-300 transition-colors duration-150 ease-in-out bg-gray-800 rounded-full min-w-10 hover:bg-purple-600"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogList',
};
</script>
