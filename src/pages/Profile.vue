<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <!-- Page content -->
    <main class="grow">
      <section class="relative">
        <div class="max-w-6xl px-4 mx-auto sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
              <h1 class="h1">Om Shanti Shanti</h1>
            </div>

            <Modal id="modal" :show="modalOpen">
              <div class="relative w-full h-full max-w-md mx-auto my-0 md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="authentication-modal"
                    @click="close()"
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
                    <Form
                      v-slot="{ errors, meta }"
                      ref="form"
                      class="max-w-xl mx-auto space-y-3"
                      :validation-schema="passwordSchema"
                      @click.prevent="false"
                    >
                      <div>
                        <label
                          for="password"
                          class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                          >이전 비밀번호</label
                        >
                        <Field
                          v-model="oldPassword"
                          as="input"
                          type="password"
                          name="이전비밀번호"
                          class="w-full text-gray-300 form-input"
                          :class="{
                            'border-red-500 focus:border-red-500': errors.이전비밀번호,
                          }"
                          placeholder="이전 비밀번호를 입력해주세요."
                        />
                        <span class="mt-2 text-sm text-red-500">{{
                          errors.이전비밀번호
                        }}</span>
                      </div>
                      <button
                        type="submit"
                        class="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 disabled:opacity-25 mt-8"
                        :disabled="!meta.valid"
                        @click="deleteMember"
                      >
                        탈퇴하기
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            </Modal>
            <!-- Form -->
            <Form
              v-slot="{ errors, meta }"
              ref="form"
              class="max-w-xl mx-auto"
              :validation-schema="schema"
              @click.prevent="false"
            >
              <div class="max-w-sm mx-auto">
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="full-name"
                      >이름 <span class="text-red-600">*</span></label
                    >
                    <Field
                      v-model="name"
                      as="input"
                      name="이름"
                      type="text"
                      class="w-full text-gray-300 form-input"
                      :class="{ 'border-red-500 focus:border-red-500': errors.이름 }"
                      placeholder="이름을 입력해주세요."
                      rules="required"
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.이름 }}</span>
                  </div>
                </div>
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="full-name"
                      >연락처 <span class="text-red-600">*</span></label
                    >
                    <Field
                      v-model="phone"
                      as="input"
                      name="전화번호"
                      type="text"
                      class="w-full text-gray-300 form-input"
                      :class="{ 'border-red-500 focus:border-red-500': errors.전화번호 }"
                      placeholder="전화번호를 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.전화번호 }}</span>
                  </div>
                </div>
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="email"
                      >이메일<span class="text-red-600">*</span></label
                    >
                    <Field
                      v-model="email"
                      as="input"
                      type="email"
                      name="이메일"
                      class="w-full text-gray-300 form-input disabled:opacity-25"
                      :class="{ 'border-red-500 focus:border-red-500': errors.이메일 }"
                      placeholder="이메일을 입력해주세요."
                      disabled
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.이메일 }}</span>
                  </div>
                </div>
                <div class="flex flex-wrap mt-6 -mx-3">
                  <div class="w-full px-3">
                    <button
                      class="w-full text-white bg-blue-600 rounded-md cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      :disabled="!meta.valid"
                      @click="updateProfile()"
                    >
                      개인 정보 변경
                    </button>
                  </div>
                  <div class="w-full px-3 mt-3">
                    <button
                      class="w-full text-white bg-blue-600 rounded-md cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      @click="$router.push({ path: '/changePassword' })"
                    >
                      비밀번호 변경
                    </button>
                  </div>
                  <div class="w-full px-3 mt-3">
                    <button
                      class="w-full text-white bg-red-600 rounded-md cursor-pointer btn hover:bg-red-700 disabled:opacity-25"
                      @click="modalOpen = true"
                    >
                      회원 탈퇴
                    </button>
                  </div>
                  <div class="w-full px-3 mt-5">
                    <button
                      class="w-full text-white bg-blue-600 rounded-md cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      @click="$router.push({ path: '/' })"
                    >
                      홈으로
                    </button>
                  </div>
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
import Modal from '../utils/Modal.vue';
import Header from '../partials/Header.vue';
import Footer from '../partials/Footer.vue';
import {
  getAuth,
  updateProfile,
  onAuthStateChanged,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

defineRule('required', required);
defineRule('email', email);
defineRule('password_valid', (value) => {
  const regExp = /^.{8,}$/;

  if (!regExp.test(value)) {
    return '최소 8자 이상 입력해주세요.';
  } else {
    return true;
  }
});
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
      email: '{field}을 정확히 입력해주세요.',
      numeric: '{field}은 숫자만 입력할 수 있습니다.',
    },
  }),
});

export default {
  name: 'Profile',
  components: {
    Modal,
    Header,
    Footer,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      modalOpen: false,
      name: '',
      phone: '',
      email: '',
      oldPassword: '',
      schema: {
        이름: 'required',
        전화번호: 'required|numeric|phone_valid',
        이메일: 'required|email',
      },
      passwordSchema: {
        이전비밀번호: 'required|password_valid',
      },
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
        this.name = user?.displayName;
        this.phone = user?.photoURL;
        this.email = user?.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    close() {
      this.modalOpen = false;
    },
    async updateProfile() {
      this.emitter.emit('showSpinner', true);
      await updateProfile(getAuth().currentUser, {
        displayName: this.name,
        photoURL: this.phone,
      })
        .then(() => {
          this.emitter.emit('showSpinner', false);
          this.emitter.emit('showToast', '개인 정보가 변경되었습니다.');
        })
        .catch((error) => {
          this.emitter.emit('showSpinner', false);
          console.log(error.code);
        });
    },
    async deleteMember() {
      this.emitter.emit('showSpinner', true);
      const auth = getAuth();
      const user = auth.currentUser;

      const credential = EmailAuthProvider.credential(this.email, this.oldPassword);
      await reauthenticateWithCredential(user, credential)
        .then(() => {
          console.log('re-authenticated.');

          deleteUser(user)
            .then(() => {
              this.emitter.emit('showSpinner', false);
              this.emitter.emit('showToast', '요프에서 떠났습니다.');
              setTimeout(() => {
                this.$router.push({ path: '/' });
              }, 1500);
            })
            .catch((error) => {
              this.emitter.emit('showSpinner', false);
              console.log(error.code);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          this.emitter.emit('showSpinner', false);
          if (errorCode === 'auth/wrong-password') {
            this.emitter.emit('showToast', '이전 비밀번호를 다시 입력해주세요.');
            return false;
          }
        });
    },
  },
};
</script>
