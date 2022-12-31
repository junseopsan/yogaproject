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
              <h1 class="h1">
                {{ message !== '' ? `${message} 🙏` : `결제가 실패하였습니다. <br />다시
                시도해주세요 🙏` }}
              </h1>
            </div>
            <div
              class="mt-2 text-lg text-gray-400"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button
                class="w-1/3 text-white bg-blue-600 rounded-md cursor-pointer mt-7 btn hover:bg-blue-700 disabled:opacity-25"
                @click="$router.push({ path: '/' })"
              >
                메인페이지로 이동
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../partials/Header.vue';
import Footer from '../partials/Footer.vue';
import axios from 'axios';

export default {
  name: 'Fail',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isPaySuccess: false,
      message: '',
      sucessPayInfo: {
        amount: '0',
        orderId: '0',
        paymentKey: '0',
      },
    };
  },
  async mounted() {
    const query = this.$route.query;
    if (query && query.orderId) {
      this.sucessPayInfo.amount = query.amount;
      this.sucessPayInfo.orderId = query.orderId;
      this.sucessPayInfo.paymentKey = query.paymentKey;
      const getAmount = localStorage.getItem('amount');

      if (this.sucessPayInfo.amount === getAmount) {
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
                  'Basic dGVzdF9za19ZeVpxbWtLZVA4Z21uTHg0WlBPVmJRUnhCOWxHOg==',
                'Content-Type': 'application/json',
              },
            }
          )
          .then((res) => {
            console.log(res);
            const result = res.data;
            if (result.status === 'DONE') {
              this.isPaySuccess = true;
            }
          })
          .catch((err) => {
            console.log(err);
            const data = err.response.data;
            this.message = data.message;
          });
      }
    }
  },
  methods: {},
};
</script>
