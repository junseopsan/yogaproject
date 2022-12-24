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
              <h1 class="h1">요프에 온걸 환영해요.</h1>
            </div>

            <!-- Form -->
            <Form
              v-slot="{ errors, meta }"
              ref="contact"
              class="max-w-xl mx-auto"
              :validation-schema="schema"
              @click.prevent="false"
            >
              <div class="max-w-sm mx-auto">
                <!-- <form>
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full px-3">
                    <button
                      class="relative flex items-center w-full px-0 text-white bg-red-600 btn hover:bg-red-700"
                    >
                      <svg
                        class="w-4 h-4 mx-4 text-white opacity-75 fill-current shrink-0"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                        />
                      </svg>
                      <span
                        class="flex items-center h-6 mr-4 border-r border-white border-opacity-25"
                        aria-hidden="true"
                      ></span>
                      <span class="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                    </button>
                  </div>
                </div>
              </form> -->
                <!-- <div class="flex items-center my-6">
                <div
                  class="mr-3 border-t border-gray-700 border-dotted grow"
                  aria-hidden="true"
                ></div>
                <div class="text-gray-400">Or, sign in with your email</div>
                <div
                  class="ml-3 border-t border-gray-700 border-dotted grow"
                  aria-hidden="true"
                ></div>
              </div> -->
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="email"
                      >Email</label
                    >
                    <Field
                      v-model="email"
                      as="input"
                      type="email"
                      name="이메일"
                      class="w-full text-gray-300 form-input"
                      :class="{ 'border-red-500 focus:border-red-500': errors.이메일 }"
                      placeholder="이메일을 입력해주세요."
                      rules="required"
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.이메일 }}</span>
                  </div>
                </div>
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="password"
                      >Password</label
                    >
                    <Field
                      v-model="password"
                      as="input"
                      type="password"
                      name="비밀번호"
                      class="w-full text-gray-300 form-input"
                      :class="{ 'border-red-500 focus:border-red-500': errors.비밀번호 }"
                      placeholder="비밀번호를 입력해주세요."
                      rules="required"
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.비밀번호 }}</span>
                  </div>
                </div>
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <div class="flex justify-between">
                      <!-- <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" />
                        <span class="ml-2 text-gray-400">Keep me signed in</span>
                      </label> -->
                      <router-link
                        to="/resetPassword"
                        class="text-blue-600 transition duration-150 ease-in-out hover:text-gray-200"
                        >비밀번호를 잊어버리셨나요?</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap mt-6 -mx-3">
                  <div class="w-full px-3">
                    <button
                      class="w-full text-white bg-blue-600 cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      :disabled="!meta.valid"
                      @click="login"
                    >
                      로그인
                    </button>
                  </div>
                </div>
                <div class="mt-6 text-center text-gray-400">
                  아이디가 없으신가요?
                  <router-link
                    to="/signup"
                    class="text-blue-600 transition duration-150 ease-in-out hover:text-gray-200"
                    >회원가입</router-link
                  >
                </div>
              </div>
            </Form>
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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

defineRule('required', required);
defineRule('email', email);

configure({
  // create and set a localization handler
  generateMessage: localize('en', {
    messages: {
      required: '{field}을 입력해주세요.',
      email: '{field}을 정확히 입력해주세요.',
    },
  }),
});

export default {
  name: 'SignIn',
  components: {
    Field,
    Form,
    ErrorMessage,
    Header,
    Footer,
  },
  data() {
    return {
      email: '',
      password: '',
      schema: {
        이메일: 'required|email',
        비밀번호: 'required',
      },
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          this.$router.push({ path: '/' });
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode === 'auth/user-not-found') {
            this.emitter.emit('showToast', '유저를 찾을 수 없습니다.');
          }
          if (errorCode === 'auth/wrong-password') {
            this.emitter.emit('showToast', '비밀번호가 일치하지 않습니다.');
          }
        });
    },
  },
};
</script>
