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
              <h1 class="h1">요프에 오신걸 환영해요!</h1>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <div class="flex flex-wrap mb-4 -mx-3">
                <div class="w-full px-3">
                  <label
                    class="block mb-1 text-sm font-medium text-gray-300"
                    for="full-name"
                    >Full Name <span class="text-red-600">*</span></label
                  >
                  <input
                    v-model="name"
                    type="text"
                    class="w-full text-gray-300 form-input"
                    placeholder="이름을 입력해주세요."
                  />
                </div>
              </div>
              <div class="flex flex-wrap mb-4 -mx-3">
                <div class="w-full px-3">
                  <label class="block mb-1 text-sm font-medium text-gray-300" for="email"
                    >이메일<span class="text-red-600">*</span></label
                  >
                  <input
                    v-model="email"
                    type="email"
                    class="w-full text-gray-300 form-input"
                    placeholder="이메일을 입력해주세요."
                  />
                </div>
              </div>
              <div class="flex flex-wrap mb-4 -mx-3">
                <div class="w-full px-3">
                  <label
                    class="block mb-1 text-sm font-medium text-gray-300"
                    for="password"
                    >비밀번호<span class="text-red-600">*</span></label
                  >
                  <input
                    v-model="password"
                    type="password"
                    class="w-full text-gray-300 form-input"
                    placeholder="비밀번호는 6자(영문 기준) 이상이어야 합니다."
                  />
                </div>
              </div>
              <!-- <div class="text-sm text-center text-gray-500">
                  I agree to be contacted by Open PRO about this offer as per the Open PRO
                  <a
                    class="text-gray-400 underline transition duration-150 ease-in-out hover:text-gray-200 hover:no-underline"
                    href="#0"
                    >Privacy Policy</a
                  >.
                </div> -->
              <div class="flex flex-wrap mt-6 -mx-3">
                <div class="w-full px-3">
                  <button
                    class="w-full text-white bg-blue-600 btn hover:bg-blue-700"
                    @click="signup()"
                  >
                    Sign up
                  </button>
                  <!-- <button
                    class="w-full text-white bg-purple-600 btn hover:bg-purple-700"
                    @click="updateProfile()"
                  >
                    update
                  </button> -->
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
import Header from './../partials/Header.vue';
import PageIllustration from '../partials/PageIllustration.vue';
import Footer from './../partials/Footer.vue';
// import firebase from 'firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default {
  name: 'SignUp',
  components: {
    Header,
    PageIllustration,
    Footer,
  },
  data() {
    return {
      email: '',
      password: '',
      name: '박준섭',
    };
  },
  mounted() {},
  methods: {
    async updateProfile() {},
    async signup() {
      if (!this.email) {
        this.emitter.emit('showToast', '이메일을 입력해주세요.');
        return;
      }

      if (!this.password) {
        this.emitter.emit('showToast', '암호를 입력하여 주십시오.');
        return;
      }
      await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === 'auth/email-already-in-use') {
            this.emitter.emit('showToast', '이미 존재하는 이메일입니다.');
            this.email = '';
            this.password = '';
            return;
          }
        });

      await updateProfile(getAuth().currentUser, { displayName: this.name })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: '/' });
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
  },
};
</script>
