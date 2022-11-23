<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Hero content -->
      <div class="relative pt-32 md:pt-40">
        <!-- Section header -->
        <div
          class="max-w-2xl pb-6 mx-auto text-right md:pb-10"
          data-aos-delay="100"
          data-aos="fade-up"
        >
          <h1 class="mb-4 text-center h1" v-html="mainText"></h1>
        </div>
        <Process />
        <!-- Hero image -->
        <div>
          <div
            class="relative flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <PricingTables @open="modalOpen = true" />
          </div>
          <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 class="mb-4 h2" data-aos="fade-up">수련 방식</h2>
            <p
              class="text-xl font-semibold text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              요즘 요프는 몸과 마음의 이완으로 시작하여, 각성으로 진입하고 다시 이완으로
              종료됩니다. <br />
              이완과 각성은 총체적으로 보는게 좋지 않을까 싶어요.<br />
              각자의 상황과 큰 상황 전체를 연결하는 수련을 합시다.
            </p>
          </div>

          <!-- Modal -->
          <Modal id="modal" :show="modalOpen">
            <div class="relative w-full h-full max-w-md mx-auto my-0 md:h-auto">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                  @click="close"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    수업 결제하기
                  </h3>
                  <form class="space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >이름</label
                      >
                      <input
                        id="email"
                        type="email"
                        name="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="홍길동"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >전화번호</label
                      >
                      <input
                        id="email"
                        type="email"
                        name="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="01011112222"
                        required
                      />
                    </div>
                    <div class="flex justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          for="remember"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Remember me</label
                        >
                      </div>
                      <a
                        href="#"
                        class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >Lost Password?</a
                      >
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login to your account
                    </button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?
                      <a href="#" class="text-blue-700 hover:underline dark:text-blue-500"
                        >Create account</a
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Modal from './../utils/Modal.vue';
import axios from 'axios';
import PricingTables from './../partials/PricingTables.vue';
import Process from './../partials/Process.vue';
import moment from 'moment';

export default {
  name: 'HeroHome',
  components: {
    Modal,
    PricingTables,
    Process,
  },
  data: function () {
    return {
      modalOpen: false,
      list: [],
      mainText: '',
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    close() {
      this.modalOpen = false;
    },
    async getList() {
      await axios
        .get(
          `https://sheets.googleapis.com/v4/spreadsheets/1DKyGC_unb6zzKLhyU-WogO1qC9Y1j-wn1hwqdls5fRw/values/sheet?key=AIzaSyA_Mt2lgk76CtG-tTrBjePTKnrJwwqmcw8`
        )
        .then((res) => {
          const result = res.data.values;
          let list = [];
          result.forEach((item) => {
            list = list.concat(item);
          });
          const day = moment().format('DD');
          this.mainText = list[Number(day)];
        });
    },
  },
};
</script>
