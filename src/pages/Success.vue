<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <Header :is-show-user="false" />

    <!-- Page content -->
    <main class="grow">
      <section class="relative">
        <div class="max-w-6xl px-4 mx-auto sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
              <div v-if="isPaySuccess">
                <h1 class="h1">{{ isPaySuccess ? '감사합니다.' : '' }}</h1>
                <h1 class="h1">{{ isPaySuccess ? '결제가 완료되었습니다 🙂' : '' }}</h1>
              </div>
              <div v-else-if="type === 'cash'">
                <h1 class="h1">감사합니다.</h1>
                <br />
                <h3 class="h3">아래의 계좌로 입금 부탁드립니다.</h3>
                <br />
                <h2 class="h2">{{ `${cashInfo.account}` }}</h2>
                <h3 class="h3">
                  {{
                    `${cashInfo.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원`
                  }}
                </h3>
              </div>
              <div v-else-if="!isPaySuccess">
                <h1 class="h1">{{ `${message !== '' ? message + ' 🙏' : ''}` }}</h1>
              </div>
              <div class="mt-2 text-lg text-gray-400">
                <button
                  class="text-white bg-blue-600 rounded-md cursor-pointer sm:w-1/2 md: mt-7 btn hover:bg-blue-700 disabled:opacity-25 md:w-1/4"
                  @click="$router.push({ path: '/' })"
                >
                  메인페이지로 <br />이동
                </button>
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
import moment from 'moment';
import Header from '../partials/Header.vue';
import Footer from '../partials/Footer.vue';
import axios from 'axios';

export default {
  name: 'Success',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isPaySuccess: false,
      message: '',
      type: '',
      sucessPayInfo: {
        amount: '0',
        orderId: '0',
        paymentKey: '0',
      },
      cashInfo: {
        account: '신한은행 612-06-510843 요가프로젝트',
        amount: '0',
      },
    };
  },
  async mounted() {
    this.emitter.emit('showSpinner', false);
    const getAmount = localStorage.getItem('amount');
    const query = this.$route.query;
    if (query && query.type === 'cash') {
      this.type = 'cash';
      this.cashInfo.amount = getAmount.toLocaleString();
      this.googlesheet();
    }
    if (query && query.orderId) {
      this.type = 'card';
      this.sucessPayInfo.amount = query.amount;
      this.sucessPayInfo.orderId = query.orderId;
      this.sucessPayInfo.paymentKey = query.paymentKey;

      if (this.sucessPayInfo.amount == getAmount) {
        await axios
          .post(
            `https://api.tosspayments.com/v1/payments/confirm`,
            {
              paymentKey: this.sucessPayInfo.paymentKey,
              amount: this.sucessPayInfo.amount,
              orderId: this.sucessPayInfo.orderId,
            },
            {
              headers: {
                'Authorization':
                  'Basic bGl2ZV9za19LbWE2MFJaYmxycXlBcEE5UVc1cnd6WVdCbjE0Og==',
                'Content-Type': 'application/json',
              },
            }
          )
          .then((res) => {
            const result = res.data;
            if (result.status === 'DONE') {
              this.isPaySuccess = true;
              this.googlesheet();
            }
          })
          .catch((err) => {
            this.isPaySuccess = false;
            const data = err.response.data;
            this.message = data.message;
          });
      }
    }
  },
  methods: {
    async googlesheet() {
      const payInfo = JSON.parse(localStorage.getItem('payInfo'));
      await axios
        .get(
          `https://script.google.com/macros/s/AKfycbxnyxA6FvWaWcnhW4KmEPVkPKZj3Q1Zv0A8jGmGBOO-2eD252zdzVoo47v2dUzQ6kdkSQ/exec`,
          {
            params: {
              신청일: moment().format('YYYY-MM-DD'),
              이름: payInfo.name,
              전화번호: payInfo.phoneNumber,
              수업이름: payInfo.classTitle,
              수련장소: payInfo.selectPlace,
              수련기간: payInfo.selectPeriod,
              수련시작일: payInfo.startDate,
              수련종료일: payInfo.endDate,
              하고싶은말: payInfo.somethingText,
              수련금액: payInfo.selectedAmount,
              결제방법: payInfo.selectPayMethod,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
