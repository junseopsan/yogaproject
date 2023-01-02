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
          <h1 class="mb-4 text-center h1" v-html="mainTitle"></h1>
        </div>
        <div class="max-w-5xl pb-6 mx-auto text-center md:pb-12">
          <section class="text-white bg-gray-900">
            <div class="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
              <div
                class="grid content-center gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3"
                data-aos-delay="100"
                data-aos="fade-up"
              >
                <template v-for="(item, key) in noticeList" :key="key">
                  <div
                    v-if="item.isDisplay === 'Yes'"
                    class="self-center block p-8 transition border border-gray-800 shadow-xl justify-self-center rounded-xl hover:border-blue-500/10 hover:shadow-blue-500/10"
                  >
                    <h2 class="font-bold text-white text-md" v-html="item.title"></h2>
                    <p class="mt-1 text-sm text-gray-300" v-html="item.content"></p>
                  </div>
                </template>
              </div>
            </div>
          </section>
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
            <h2 class="mb-4 h2" data-aos="fade-up" v-html="classTitle"></h2>
            <p
              class="text-xl font-semibold text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              v-html="classDescription"
            ></p>
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
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >수업명</label
                    >
                    <input
                      class="bg-gray-50 disabled:opacity-60 disabled:font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      :value="modalInfo.title + ' : ' + modalInfo.typeName"
                      :disabled="true"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >수련비</label
                    >
                    <input
                      v-model="getAmount"
                      class="bg-gray-50 disabled:opacity-60 disabled:font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      disabled
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
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                        >이름</label
                      >
                      <Field
                        v-model="guestInfo.name"
                        as="input"
                        name="이름"
                        type="text"
                        class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                        :class="{ 'border-red-500 focus:border-red-500': errors.이름 }"
                        placeholder="이름을 입력해주세요."
                        rules="required"
                      />
                      <span class="mt-2 text-sm text-red-500">{{ errors.이름 }}</span>
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                        >전화번호</label
                      >
                      <Field
                        v-model="guestInfo.phoneNumber"
                        as="input"
                        type="text"
                        name="전화번호"
                        class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                        :class="{
                          'border-red-500 focus:border-red-500': errors.전화번호,
                        }"
                        rules="required"
                        placeholder="전화번호를 입력해주세요."
                      />
                      <span class="mt-2 text-sm text-red-500">{{ errors.전화번호 }}</span>
                    </div>
                    <div class="w-full">
                      <label
                        for="password"
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                        >수련 장소
                      </label>
                      <select
                        v-model="selectPlace"
                        class="w-full font-bold text-gray-300 rounded-md form-select"
                      >
                        <option>오프라인</option>
                        <option>온라인</option>
                      </select>
                    </div>
                    <div
                      v-if="
                        modalInfo.type === 'general' ||
                        (modalInfo.type === 'peak' && modalInfo.typeName === '지도자과정')
                      "
                    >
                      <label
                        for="password"
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
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
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                        >수련 시작일</label
                      >
                      <div
                        class="relative"
                        :class="{ mobile: $isMobile(), pc: !$isMobile() }"
                      >
                        <flat-pickr
                          v-model="startDate"
                          class="font-medium form-input pl-9 bg-gray-50 disabled:opacity-60 disabled:font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          :config="config"
                        ></flat-pickr>
                        <div
                          class="absolute inset-0 right-auto flex items-center pointer-events-none"
                        >
                          <svg
                            class="w-4 h-4 ml-3 fill-current text-slate-500"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div v-if="modalInfo.typeName !== '개인레슨'">
                      <label
                        for="password"
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                        >수련 종료일</label
                      >
                      <div class="flatpickr-wrapper">
                        <div class="relative">
                          <flat-pickr
                            v-model="endDate"
                            class="font-medium form-input pl-9 bg-gray-50 disabled:opacity-60 disabled:font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            :config="config"
                            disabled
                          ></flat-pickr>
                          <div
                            class="absolute inset-0 right-auto flex items-center pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 ml-3 fill-current text-slate-500"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full">
                      <label
                        for="password"
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                        >결제 방법
                      </label>
                      <select
                        v-model="selectPayMethod"
                        class="w-full font-bold text-gray-300 rounded-md form-select"
                      >
                        <option>무통장입금</option>
                        <option>카드</option>
                      </select>
                    </div>
                    <div>
                      <label
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                        >하고싶은말</label
                      >
                      <Field
                        v-model="guestInfo.somethingText"
                        as="input"
                        type="text"
                        name="하고싶은말"
                        class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                        placeholder="하고싶은말을 입력해주세요."
                      />
                    </div>
                    <div>
                      <label
                        class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                        >환불 정책</label
                      >
                      <div class="text-sm font-bold text-red-500">
                        1주전 100% / 1일전 90% / 시작후 환불 불가
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 mt-8"
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
import GoodDatePicker from './../partials/GoodDatePicker.vue';
import moment from 'moment';
import flatPickr from 'vue-flatpickr-component';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, numeric } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { v4 as uuidv4 } from 'uuid';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../main';

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
    GoodDatePicker,
    Form,
    ErrorMessage,
    Modal,
    PricingTables,
    Process,
    flatPickr,
  },
  data: function () {
    return {
      schema: {
        이름: 'required',
        전화번호: 'required|numeric|phone_valid',
      },
      sucessPayInfo: {
        amount: '0',
        orderId: '0',
        paymentKey: '0',
      },
      noticeList: [],
      selectPeriod: '1개월',
      selectPlace: '오프라인',
      selectPayMethod: '무통장입금',
      period: 1,
      discountName: '',
      selectedAmount: 0,
      amount: '',
      modalOpen: false,
      list: [],
      formatter: { date: 'YYYY-MM-DD', month: 'MM' },
      mainTitle: '" 행복하세요.<br />밝게 지내요. <br />있는 그대로의 자신이 되세요. "',
      classTitle: '수련 방식',
      classDescription:
        '요즘 요프는 몸과 마음의 이완으로 시작하여, 각성으로 진입하고 다시 이완으로 종료됩니다. <br />이완과 각성은 총체적으로 보는게 좋지 않을까 싶어요.<br />각자의 상황과 큰 상황 전체를 연결하는 수련을 합시다.',
      guestInfo: {
        name: '',
        phoneNumber: '',
        somethingText: '',
      },
      startDate: moment().format('YYYY-MM-DD'),
      modalInfo: {
        type: '',
        title: '',
        typeName: '',
        amount: 0,
      },
      config: {
        static: true,
        monthSelectorType: 'static',
        theme: 'dark',
        dateFormat: 'Y-m-d',
        disableMobile: 'true',
        minDate: 'today',
        defaultDate: [moment().format('YYYY-MM-DD')],
        prevArrow:
          '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow:
          '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        onReady: (selectedDates, dateStr, instance) => {
          instance.element.value = dateStr.replace('to', '-');
          // const customClass = props.align ? props.align : '';
          // instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
        },
        onChange: (selectedDates, dateStr, instance) => {
          instance.element.value = dateStr.replace('to', '-');
        },
      },
    };
  },
  computed: {
    getAmount() {
      let amount = this.modalInfo.amount;
      let discount = 0;
      let discountName = '';
      let discountMonth = 1;
      let discountPercent = 0.9;

      const selectPayMethod = this.selectPayMethod;
      const selectPeriod = this.selectPeriod;
      const selectPlace = this.selectPlace;

      switch (selectPeriod) {
        case '1개월':
          discount = 0;
          discountMonth = 1;
          discountPercent = 1;
          break;
        case '3개월':
          discount = 10;
          discountMonth = 3;
          discountPercent = 0.9;
          break;
        case '6개월':
          discount = 20;
          discountMonth = 6;
          discountPercent = 0.8;
          break;
        case '1 년':
          discount = 30;
          discountMonth = 12;
          discountPercent = 0.7;
          break;
      }

      if (selectPlace === '온라인') {
        discount = discount + 10;
        discountPercent = discountPercent - 0.1;
      }

      if (selectPayMethod === '카드') {
        discount = discount - 10;
        discountPercent = discountPercent + 0.1;
      }

      if (discount === 0) {
        amount = amount * discountMonth;
        discountName = '';
      }

      if (discount < 0) {
        amount = amount * discountMonth * 1.1;
        discountName = `(10% 부과)`;
      }

      if (discount > 0) {
        amount = amount * discountMonth * discountPercent;
        discountName = `(${discount}% 할인)`;
      }

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.selectedAmount = Math.floor(amount);

      return amount.toLocaleString() + ' 원 ' + discountName;
    },
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
      if (this.modalInfo.typeName === '1 회') {
        period = 0;
      } else if (this.modalInfo.typeName === '10 회') {
        period = 3;
      }

      return moment(this.startDate).add(period, 'month').format('YYYY-MM-DD');
    },
  },
  mounted() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
    this.getMainTitle();
    this.getNotice();
  },
  methods: {
    async getNotice() {
      const querySnapshot = await getDocs(collection(db, 'notice'));
      const list = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        list.push({
          number: data.number,
          title: data.title,
          content: data.content,
          isDisplay: data.isDisplay,
        });
      });

      this.noticeList = list.sort((a, b) => a.number - b.number);
    },
    async getMainTitle() {
      const querySnapshot = await getDocs(collection(db, 'yogaproject'));
      querySnapshot.forEach((doc) => {
        this.mainTitle = doc.data().mainTitle;
        this.classTitle = doc.data().classTitle;
        this.classDescription = doc.data().classDescription;
      });
    },
    async toss() {
      const clientKey = process.env.VITE_TOSS_CLIENT_KEY;
      const uuid = uuidv4();
      this.emitter.emit('showSpinner', true);
      await loadTossPayments(clientKey)
        .then((tossPayments) => {
          tossPayments
            .requestPayment('카드', {
              amount: this.selectedAmount,
              orderId: uuid,
              orderName: this.modalInfo.title + ' : ' + this.modalInfo.typeName,
              customerName: this.guestInfo.name,
              successUrl: 'https://www.yogaproject.kr/success',
              failUrl: 'https://www.yogaproject.kr/fail',
              // successUrl: 'http://127.0.0.1:5173/success',
              // failUrl: 'http://127.0.0.1:5173/fail',
            })
            .catch((error) => {
              this.emitter.emit('showToast', error.message);
              return false;
            });
        })
        .catch((error) => {
          this.emitter.emit('showToast', error.message);
          return false;
        });
      this.emitter.emit('showSpinner', false);
    },
    async goPay() {
      localStorage.setItem('amount', this.selectedAmount);
      if (this.selectPayMethod === '카드') {
        this.toss();
      } else if (this.selectPayMethod === '무통장입금') {
        this.$router.push({ path: '/success', query: { type: 'cash' } });
      }
    },
    payModalOpen(value) {
      const modalInfo = this.modalInfo;
      modalInfo.type = value.type;
      modalInfo.title = value.title;
      modalInfo.typeName = value.typeName;
      modalInfo.amount = Number(value.amount);

      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.guestInfo.name = user?.displayName;
          this.guestInfo.phoneNumber = user?.photoURL;
        }
      });

      this.modalOpen = true;

      const body = document.getElementsByTagName('body')[0];
      body.classList.add('scrollLock');
    },
    close() {
      this.modalOpen = false;
      this.$refs.form.resetForm();
      this.guestInfo.name = '';
      this.guestInfo.phoneNumber = '';
      this.selectPeriod = '1개월';
      this.selectPlace = '오프라인';
      this.startDate = moment().format('YYYY-MM-DD');
      moment(this.startDate).add(1, 'month').format('YYYY-MM-DD');

      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('scrollLock');
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
<style>
.pc .flatpickr-calendar.static.open {
  top: -295px;
  left: 0px;
}
.mobile .flatpickr-calendar.static.open {
  top: -295px;
  left: 150px;
}
.scrollLock {
  overflow: hidden;
}
</style>
