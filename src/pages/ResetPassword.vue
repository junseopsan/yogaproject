<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <section class="relative">
        <div class="max-w-6xl px-4 mx-auto sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-2xl pb-12 mx-auto text-center md:pb-20">
              <h1 class="mb-4 h1">비밀번호를 잊어버리셨나요?</h1>
              <p class="text-xl text-gray-400">
                이메일로 비밀번호 재설정 링크를 보내드립니다.
              </p>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <div class="flex flex-wrap mb-4 -mx-3">
                <div class="w-full px-3">
                  <label class="block mb-1 text-sm font-medium text-gray-300" for="email"
                    >Email</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    class="w-full text-gray-300 form-input"
                    placeholder="이메일을 입력해주세요."
                  />
                </div>
              </div>
              <div class="flex flex-wrap mt-6 -mx-3">
                <div class="w-full px-3">
                  <button
                    class="w-full text-white bg-blue-600 cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                    :disabled="email === '' ? true : false"
                    @click="resetPassword"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
              <div class="mt-6 text-center text-gray-400">
                <router-link
                  to="/signin"
                  class="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                  >Cancel</router-link
                >
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
import Header from './../partials/Header.vue';
import Footer from './../partials/Footer.vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default {
  name: 'ResetPassword',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: 'junseopsan@gmail.com',
    };
  },
  methods: {
    resetPassword() {
      if (this.email === '') {
        this.emitter.emit('showToast', '이메일을 입력해주세요.');
      }
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email.toString())
        .then((res) => {
          console.log(res);
          this.emitter.emit('showToast', '이메일 재설정 메일을 보내었습니다.');
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode === 'auth/user-not-found') {
            this.emitter.emit(
              'showToast',
              '존재하지 않는 이메일입니다.<br/>이메일을 다시 확인해주세요!'
            );
          }
        });
    },
  },
};
</script>
