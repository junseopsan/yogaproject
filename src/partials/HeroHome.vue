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
            <PricingTables @open="(value) => payModalOpen(value)" />
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
                <div class="px-6 py-6 space-y-3 lg:px-8">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 font-bold text-gray-900 text-md dark:text-white"
                      >수업명</label
                    >
                    <input
                      class="bg-gray-50 disabled:opacity-60 disabled:font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      :value="modalInfo.className + ' : ' + modalInfo.typeName"
                      :disabled="true"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 font-bold text-gray-900 text-md dark:text-white"
                      >수련비</label
                    >
                    <input
                      class="bg-gray-50 disabled:font-bold disabled:opacity-60 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      :class="{
                        'disabled:text-yellow-500 disabled:text-lg disabled:font-extrabold disabled:transform':
                          selectPeriod === '3개월',
                        'disabled:text-orange-500 disabled:text-xl disabled:font-extrabold disabled:transform':
                          selectPeriod === '6개월',
                        'disabled:text-red-500 disabled:text-2xl disabled:font-extrabold disabled:transform':
                          selectPeriod === '1 년',
                      }"
                      :value="getAmount(modalInfo.amount)"
                      :disabled="true"
                    />
                  </div>
                  <Form
                    v-slot="{ errors, meta }"
                    ref="form"
                    class="max-w-xl mx-auto space-y-3"
                    :validation-schema="schema"
                    @click.prevent="false"
                  >
                    <div>
                      <label
                        for="email"
                        class="block mb-2 font-bold text-gray-900 text-md dark:text-white"
                        >이름</label
                      >
                      <!-- <input
                        v-model="guestInfo.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="이름을 입력해주세요."
                        required
                      /> -->
                      <Field
                        v-model="guestInfo.name"
                        as="input"
                        name="이름"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        :class="{ 'border-red-500 focus:border-red-500': errors.이름 }"
                        placeholder="이름을 입력해주세요."
                        rules="required"
                      />
                      <span class="mt-2 text-sm text-red-500">{{ errors.이름 }}</span>
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 font-bold text-gray-900 text-md dark:text-white"
                        >전화번호</label
                      >
                      <!-- <input
                        v-model="guestInfo.phoneNumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="전화번호를 입력해주세요."
                        required
                      /> -->
                      <Field
                        v-model="guestInfo.phoneNumber"
                        as="input"
                        type="text"
                        name="전화번호"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        :class="{
                          'border-red-500 focus:border-red-500': errors.전화번호,
                        }"
                        rules="required"
                        placeholder="전화번호를 입력해주세요."
                      />
                      <span class="mt-2 text-sm text-red-500">{{ errors.전화번호 }}</span>
                    </div>
                    <div
                      v-if="
                        modalInfo.className === 'GENERAL [그룹요가]' ||
                        modalInfo.className === 'PEAK [스페셜요가]'
                      "
                    >
                      <label
                        for="password"
                        class="block mb-2 font-bold text-gray-900 text-md dark:text-white"
                        >수련 기간
                      </label>
                      <select
                        id="country"
                        v-model="selectPeriod"
                        class="w-full font-bold text-gray-300 rounded-md form-select"
                      >
                        <option>1개월</option>
                        <option>3개월</option>
                        <option>6개월</option>
                        <option>1 년</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 font-bold text-gray-900 text-md dark:text-white"
                        >수련 시작일</label
                      >
                      <vue-tailwind-datepicker
                        v-model="startDate"
                        :formatter="formatter"
                        as-single
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 font-bold text-gray-900 text-md dark:text-white"
                        >수련 종료일</label
                      >
                      <input
                        v-model="endDate"
                        disabled
                        class="bg-gray-50 disabled:opacity-60 disabled:font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 disabled:opacity-25"
                      :disabled="!meta.valid"
                      @click="goPay"
                    >
                      결제하기
                    </button>
                  </Form>
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
import VueTailwindDatePicker from 'vue-tailwind-datepicker';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, numeric } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

defineRule('required', required);
defineRule('numeric', numeric);

defineRule('phone_valid', (value) => {
  const regExp = /^(?:(010\d{4})|(070\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/;

  if (!regExp.test(value)) {
    return '휴대전화 번호를 정확히 입력해주세요.';
  } else {
    return true;
  }
});

configure({
  // create and set a localization handler
  generateMessage: localize('en', {
    messages: {
      required: '{field}을 입력해주세요.',
      numeric: '{field}은 숫자만 입력할 수 있습니다.',
    },
  }),
});
export default {
  name: 'HeroHome',
  components: {
    Field,
    Form,
    ErrorMessage,
    Modal,
    VueTailwindDatePicker,
    PricingTables,
    Process,
  },
  data: function () {
    return {
      schema: {
        이름: 'required',
        전화번호: 'required|numeric|phone_valid',
      },
      selectPeriod: '1개월',
      period: 1,
      discountName: '',
      className: '',
      selectedAmount: 0,
      modalOpen: false,
      list: [],
      formatter: { date: 'YYYY-MM-DD', month: 'MM' },
      mainText: '',
      guestInfo: {
        name: '',
        phoneNumber: '',
      },
      startDate: moment().format('YYYY-MM-DD'),
      modalInfo: {
        className: '',
        typeName: '',
        amount: 0,
      },
    };
  },
  computed: {
    endDate() {
      let period = 0;

      switch (this.selectPeriod) {
        case '1개월':
          period = 1;
          break;
        case '3개월':
          period = 3;
          break;
        case '6개월':
          period = 6;
          break;
        case '1 년':
          period = 12;
          break;
      }

      return moment(this.startDate).add(period, 'month').format('YYYY-MM-DD');
    },
  },
  mounted() {
    this.getList();
  },
  methods: {
    goPay() {
      const payload = {
        apikey: 'TEST-API-KEY-TALK',
        member: 'ERP_U_01',
        merchant: 'ERP_M_01',
        bill: {
          bill_id: '1612400029-100000001',
          product_nm:
            this.modalInfo.className +
            ' : ' +
            this.modalInfo.typeName +
            ', ' +
            this.selectPeriod +
            ', ' +
            '수련기간 : ' +
            this.startDate +
            '~' +
            this.endDate,
          message: '테스트중입니다.',
          member_nm: this.guestInfo.name,
          phone: this.guestInfo.phoneNumber,
          price: this.selectedAmount,
          hash: 'a0213f3f9e45e8540e91a1339e0c5deee2dd27c4cb6b039436538c316bb45fa6',
          expire_dt: '2099-12-31',
          callbackURL: 'https://www.yogaproject.kr',
        },
      };

      console.log(payload);
    },
    getAmount(amount) {
      let getAmount = amount;
      this.discountName = '';

      if (this.selectPeriod === '3개월') {
        getAmount = amount * 3 * 0.9;
        this.discountName = '10% 할인';
      } else if (this.selectPeriod === '6개월') {
        getAmount = amount * 6 * 0.8;
        this.discountName = '20% 할인';
      } else if (this.selectPeriod === '1 년') {
        getAmount = amount * 6 * 0.7;
        this.discountName = '30% 할인';
      }
      this.selectedAmount = getAmount;
      return getAmount.toLocaleString() + ' 원 ' + this.discountName;
    },
    payModalOpen(value) {
      const modalInfo = this.modalInfo;
      modalInfo.className = value.className.toUpperCase();
      modalInfo.typeName = value.typeName;
      modalInfo.amount = value.amount;

      this.modalOpen = true;
    },
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
