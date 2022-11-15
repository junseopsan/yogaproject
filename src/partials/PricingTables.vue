<template>
  <section class="relative">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center">
          <h1 class="mb-4 h1" data-aos="fade-up">수업 시간표</h1>
          <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
            언제든지 편안한 발걸음으로 오세요.
          </p>
        </div>
        <!-- Pricing tables -->
        <div>
          <!-- Pricing toggle -->
          <div class="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="400">
            <select
              id="country"
              v-model="selelctPeriod"
              class="font-bold text-gray-300 rounded-md w-2/1 form-select"
            >
              <option>1 개월</option>
              <option>3 개월</option>
              <option>6 개월</option>
              <option>1 년</option>
            </select>
          </div>

          <div class="container mx-auto">
            <div
              class="flex flex-wrap justify-center -mx-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  class="relative z-10 px-8 py-10 mb-10 overflow-hidden border border-primary shadow-pricing rounded-xl border-opacity-20 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                >
                  <span class="block mb-4 text-lg font-semibold text-primary">
                    수련생
                  </span>
                  <h2 class="text-dark mb-5 text-[42px] font-bold">
                    $59
                    <span class="text-base font-medium text-body-color">
                      / {{ selelctPeriod }}
                    </span>
                  </h2>
                  <p
                    class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
                  >
                    Perfect for using in a personal website or a client project.
                  </p>
                  <div class="mb-7">
                    <p class="mb-1 text-base leading-loose text-body-color">1 User</p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      All UI components
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Lifetime access
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Free updates
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Use on 1 (one) project
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      3 Months support
                    </p>
                  </div>
                  <a
                    href="javascript:void(0)"
                    class="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
                  >
                    Choose Personal
                  </a>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  class="relative z-10 px-8 py-10 mb-10 overflow-hidden border border-white-500 border-primary shadow-pricing rounded-xl border-opacity-20 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                >
                  <span class="block mb-4 text-lg font-semibold text-primary">
                    수행자
                  </span>
                  <h2 class="text-dark mb-5 text-[42px] font-bold">
                    $199
                    <span class="text-base font-medium text-body-color">
                      / {{ selelctPeriod }}
                    </span>
                  </h2>
                  <p
                    class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
                  >
                    Perfect for using in a Business website or a client project.
                  </p>
                  <div class="mb-7">
                    <p class="mb-1 text-base leading-loose text-body-color">5 Users</p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      All UI components
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Lifetime access
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Free updates
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Use on 3 (Three) project
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      4 Months support
                    </p>
                  </div>
                  <a
                    href="javascript:void(0)"
                    class="block w-full p-4 text-base font-semibold text-center text-white transition border rounded-md bg-primary border-primary hover:bg-opacity-90"
                  >
                    Choose Business
                  </a>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  class="relative z-10 px-8 py-10 mb-10 overflow-hidden border border-primary shadow-pricing rounded-xl border-opacity-20 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                >
                  <span class="block mb-4 text-lg font-semibold text-primary">
                    Professional
                  </span>
                  <h2 class="text-dark mb-5 text-[42px] font-bold">
                    $256
                    <span class="text-base font-medium text-body-color">
                      / {{ selelctPeriod }}
                    </span>
                  </h2>
                  <p
                    class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
                  >
                    Perfect for using in a Professional website or a client project.
                  </p>
                  <div class="mb-7">
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Unlimited Users
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      All UI components
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Lifetime access
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Free updates
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      Use on Unlimited project
                    </p>
                    <p class="mb-1 text-base leading-loose text-body-color">
                      12 Months support
                    </p>
                  </div>
                  <a
                    href="javascript:void(0)"
                    class="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
                  >
                    Choose Professional
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="grid items-start justify-center max-w-sm gap-8 mx-auto lg:gap-6 lg:max-w-none"
          >
            <div
              class="relative flex flex-col h-full p-6 bg-gray-800 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <ul class="-mb-3 text-gray-400 grow">
                <li
                  v-for="(item, key) in classList"
                  :key="key"
                  class="items-center mx-auto my-0 mb-3 w-[480px]"
                >
                  <input
                    :id="`class_number_${key}`"
                    v-model="selectedClass"
                    type="checkbox"
                    class="cursor-pointer form-checkbox w-[20px] h-[23px]"
                    :name="`class_number_${key}`"
                    :value="item.tuition"
                    @change="selectedChange(item.tuition)"
                  />
                  <label
                    :for="`class_number_${key}`"
                    class="ml-2 text-xl font-semibold text-white cursor-pointer"
                    >{{ item.className }}
                    <span class="text-xl font-bold text-red-400 cursor-pointer"
                      >{{ getTuition(item.tuition) }} 만원 </span
                    ><span v-if="selelctPeriod !== '1 개월'" class="text-blue-300">
                      {{
                        selelctPeriod === '3 개월'
                          ? '10%'
                          : selelctPeriod === '6 개월'
                          ? '20%'
                          : '30%'
                      }}
                      D.C</span
                    >
                    {{ item.description }}</label
                  >
                </li>
                <li
                  v-for="(item, key) in freeClassList"
                  :key="key"
                  class="items-center mx-auto my-0 mb-3 w-[480px]"
                >
                  <input
                    :id="`free_class_number_${key}`"
                    v-model="selectedClass"
                    type="checkbox"
                    class="cursor-pointer form-checkbox w-[20px] h-[23px]"
                    :name="`free_class_number_${key}`"
                    :value="item.tuition"
                    @change="selectedChange(item.tuition)"
                  />
                  <label
                    :for="`free_class_number_${key}`"
                    class="ml-2 text-xl font-semibold text-white cursor-pointer"
                    >{{ item.className }}
                    <span class="text-xl font-bold text-red-400 cursor-pointer"
                      >{{ item.tuition }} 만원</span
                    >
                    {{ item.description }}</label
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="600">
            <button
              class="w-1/3 text-2xl font-extrabold text-white bg-purple-600 rounded-md btn-sm hover:bg-purple-700"
              href="#0"
            >
              수업 신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingTables',
  components: {},
  data: function () {
    return {
      date: null,
      events: null,
      value: true,
      selelctPeriod: '1 개월',
      classList: [
        {
          className: '주 1회',
          tuition: '9',
          description: '(1주 1번 / 월 4번)',
          checked: true,
        },
        {
          className: '주 2회',
          tuition: '15',
          description: '(1주 2번 / 월 8번)',
          checked: false,
        },
        {
          className: '주 3회',
          tuition: '20',
          description: '(1주 3번 / 월 12번)',
          checked: false,
        },
        {
          className: '주 4회',
          tuition: '25',
          description: '(1주 4번 / 월 16번)',
          checked: false,
        },
        {
          className: '주 5회',
          tuition: '30',
          description: '(1주 5번 / 월 20번)',
          checked: false,
        },
        {
          className: '자유 한달',
          tuition: '35',
          description: '한달 낮밤 매일 언제든',
          checked: false,
        },
      ],
      freeClassList: [
        {
          className: '한번 수련',
          tuition: '3',
          description: '',
          checked: true,
        },
        {
          className: '열번 수련',
          tuition: '27',
          description: '(기간 3개월)',
          checked: false,
        },
        {
          className: '요가지도자과정',
          tuition: '37',
          description: '(월 4회 : 매주 토 7:30~11:00)',
          checked: false,
        },
        {
          className: '요가개인레슨 8회',
          tuition: '77',
          description: '(1회 10만원 / 소그룹 가능)',
          checked: false,
        },
      ],
      selectedClass: ['9'],
    };
  },
  methods: {
    getTuition(tuition) {
      const selelctPeriod = this.selelctPeriod;

      switch (selelctPeriod) {
        case '1 개월':
          return tuition;
        case '3 개월':
          return Number(tuition * 3 * 0.9);
        case '6 개월':
          return Number(tuition * 6 * 0.8);
        case '1 년':
          return Number(tuition * 12 * 0.7).toFixed(1);
      }
    },
    selectedChange(value) {
      this.selectedClass = [];
      this.selectedClass.push(value);
    },
  },
};
</script>
