<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <section class="relative">
        <div class="max-w-6xl px-4 mx-auto sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="max-w-4xl mx-auto">
              <ul class="flex border-b border-gray-100">
                <li
                  v-for="(item, key) in ['공통', '공지사항', '수업']"
                  :key="key"
                  class="flex-1 cursor-pointer"
                  @click="type = item"
                >
                  <div class="relative block p-4">
                    <span
                      v-if="item === type"
                      class="absolute inset-x-0 w-full h-px bg-blue-600 -bottom-px"
                    ></span>

                    <div class="flex items-center justify-center">
                      <span class="ml-3 text-xl font-bold text-white-900">
                        {{ item }}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div v-if="type === '공통'" class="mt-5">
                <CommonSetting />
              </div>
              <div v-else-if="type === '공지사항'">
                <NoticeAdmin />
                <div class="flex flex-wrap justify-center mt-6 -mx-3">
                  <div class="px-3 mt-5 w-[220px]">
                    <button
                      class="w-full text-white bg-blue-600 rounded-md cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      @click="$router.push({ path: '/' })"
                    >
                      홈으로
                    </button>
                  </div>
                </div>
              </div>
              <div v-else-if="type === '수업'">
                <ClassAdmin />
                <div class="flex flex-wrap justify-center mt-6 -mx-3">
                  <div class="px-3 mt-5 w-[220px]">
                    <button
                      class="w-full text-white bg-blue-600 rounded-md cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      @click="$router.push({ path: '/' })"
                    >
                      홈으로
                    </button>
                  </div>
                </div>
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
import Header from '../partials/Header.vue';
import Footer from '../partials/Footer.vue';
import NoticeAdmin from '../partials/NoticeAdmin.vue';
import ClassAdmin from '../partials/ClassAdmin.vue';
import CommonSetting from '../partials/CommonSetting.vue';

export default {
  name: 'Admin',
  components: {
    Header,
    Footer,
    NoticeAdmin,
    ClassAdmin,
    CommonSetting,
  },
  data() {
    return {
      type: '공통',
    };
  },
  mounted() {},
  methods: {},
};
</script>
