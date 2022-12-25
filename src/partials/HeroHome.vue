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
          <h1 class="mb-4 text-center h1">
            " 행복하세요.<br />
            밝게 지내요. <br />
            있는 그대로의 자신이 되세요. "
          </h1>
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
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >수업명</label
                    >
                    <input
                      class="bg-gray-50 disabled:opacity-60 disabled:font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      :value="modalInfo.className + ' : ' + modalInfo.typeName"
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
                      class="bg-gray-50 disabled:font-bold disabled:opacity-60 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      :class="{
                        'disabled:text-yellow-200 disabled:text-lg disabled:font-extrabold disabled:transform':
                          selectPeriod === '3개월',
                        'disabled:text-orange-200 disabled:text-xl disabled:font-extrabold disabled:transform':
                          selectPeriod === '6개월',
                        'disabled:text-red-200 disabled:text-2xl disabled:font-extrabold disabled:transform':
                          selectPeriod === '1 년',
                      }"
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
                        modalInfo.className === 'Together 요가프로젝트' ||
                        (modalInfo.className === 'Wonderful 요가프로젝트' &&
                          modalInfo.typeName === '지도자과정')
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
                        >수련 시작일{{ modalInfo.className }}</label
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
                        <span v-if="selectPayMethod === '계좌이체'"
                          >(신한은행 612-06-510843 요가프로젝트)</span
                        >
                      </label>
                      <select
                        v-model="selectPayMethod"
                        class="w-full font-bold text-gray-300 rounded-md form-select"
                      >
                        <option>계좌이체</option>
                        <!-- <option>카드</option> -->
                      </select>
                    </div>
                    <div>
                      <label
                        for="password"
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
                    <button
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 mt-8"
                      :disabled="!meta.valid"
                      @click="goPay"
                    >
                      신청하기
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

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, numeric } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import { loadTossPayments } from '@tosspayments/payment-sdk';

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
      selectPeriod: '1개월',
      selectPlace: '오프라인',
      selectPayMethod: '계좌이체',
      lessonCnt: '1회',
      period: 1,
      discountName: '',
      dicountPercent: 0,
      className: '',
      selectedAmount: 0,
      amount: '',
      inputAmount: '',
      modalOpen: false,
      list: [],
      formatter: { date: 'YYYY-MM-DD', month: 'MM' },
      mainText: '',
      guestInfo: {
        name: '',
        phoneNumber: '',
        somethingText: '',
      },
      startDate: moment().format('YYYY-MM-DD'),
      modalInfo: {
        className: '',
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
      let getAmount = this.inputAmount;
      let discount = 0;
      let discountName = '';

      if (this.modalInfo.typeName === '개인레슨') {
        this.lessonCnt === '1회' ? (getAmount = 110000) : (getAmount = 777000);
      }

      if (this.selectPeriod === '1개월' && this.selectPlace === '온라인') {
        discount = 20;
        getAmount = getAmount * 0.8;
      }

      if (this.selectPeriod === '3개월') {
        if (this.selectPlace === '오프라인') {
          discount = 10;
          getAmount = getAmount * 3 * 0.9;
        } else {
          discount = 30;
          getAmount = getAmount * 3 * 0.7;
        }
      } else if (this.selectPeriod === '6개월') {
        if (this.selectPlace === '오프라인') {
          discount = 20;
          getAmount = getAmount * 6 * 0.8;
        } else {
          discount = 40;
          getAmount = getAmount * 6 * 0.6;
        }
      } else if (this.selectPeriod === '1 년') {
        if (this.selectPlace === '오프라인') {
          discount = 30;
          getAmount = getAmount * 12 * 0.7;
        } else {
          discount = 50;
          getAmount = getAmount * 12 * 0.5;
        }
      }
      if (this.selectPeriod !== '1개월' || this.selectPlace === '온라인') {
        console.log(this.selectPlace);
        console.log(this.selectPeriod);
        discountName = discount + '% 할인';
      }

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dicountPercent = discount;
      // 결제할때 쓰이도록 하기 위해서
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.selectedAmount = this.selectPlace === '오프라인' ? getAmount : getAmount * 0.8;
      return getAmount.toLocaleString() + ' 원 ' + discountName;
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
    this.toss();
  },
  methods: {
    dDate(date) {
      return date < new Date();
    },
    toss() {
      const clientKey = 'test_ck_jZ61JOxRQVEow2lbKpD8W0X9bAqw';

      loadTossPayments(clientKey).then((tossPayments) => {
        console.log(tossPayments);
        // ...
      });
    },
    async goPay() {
      this.emitter.emit('showSpinner', true);
      await axios
        .get(
          `https://script.google.com/macros/s/AKfycbzHTEYacVvh_4tMZ11yadKcDqoAIzySK8HAdiIulBz2Twy3TO6y4wlYFXfX2ngc0O7Fmg/exec`,
          {
            params: {
              신청일: moment().format('YYYY-MM-DD'),
              이름: this.guestInfo.name,
              전화번호: this.guestInfo.phoneNumber,
              수업이름: this.modalInfo.className + ' : ' + this.modalInfo.typeName,
              수련장소: this.selectPlace,
              수련기간: this.selectPeriod,
              수련시작일: this.startDate,
              수련종료일: this.endDate,
              하고싶은말: this.guestInfo.somethingText,
              할인: this.dicountPercent !== 0 ? this.dicountPercent + '% 할인' : '',
              수련금액: this.selectedAmount,
              결제방법: this.selectPayMethod,
            },
          }
        )
        .then((res) => {
          const result = res.data.result;

          if (result === 'success') {
            this.emitter.emit('showSpinner', false);
            this.emitter.emit('showToast', '수업이 신청되었습니다.');
            this.close();
          }
        });
    },
    payModalOpen(value) {
      const modalInfo = this.modalInfo;
      modalInfo.className = value.className;
      modalInfo.typeName = value.typeName;
      modalInfo.amount = value.amount;
      this.inputAmount = value.amount;

      // if (modalInfo.typeName === '1 회') this.selectPeriod = '1 회';

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
