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
                      class="w-full text-gray-300 form-input"
                      :class="{ 'border-red-500 focus:border-red-500': errors.이메일 }"
                      placeholder="이메일을 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.이메일 }}</span>
                  </div>
                </div>
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="password"
                      >비밀번호<span class="text-red-600">*</span></label
                    >
                    <Field
                      v-model="password"
                      as="input"
                      type="password"
                      name="비밀번호"
                      class="w-full text-gray-300 form-input"
                      :class="{ 'border-red-500 focus:border-red-500': errors.비밀번호 }"
                      placeholder="비밀번호를 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.비밀번호 }}</span>
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
                      class="w-full text-white bg-blue-600 cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      :disabled="!meta.valid"
                      @click="signup()"
                    >
                      회원가입
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
import Header from './../partials/Header.vue';
import Footer from './../partials/Footer.vue';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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
      required: '{field}을/를 입력해주세요.',
      email: '{field}을 정확히 입력해주세요.',
      numeric: '{field}은 숫자만 입력할 수 있습니다.',
    },
  }),
});

export default {
  name: 'SignUp',
  components: {
    Header,
    Footer,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      password: '',
      schema: {
        이름: 'required',
        전화번호: 'required|numeric|phone_valid',
        이메일: 'required|email',
        비밀번호: 'required|password_valid',
      },
    };
  },
  mounted() {},
  methods: {
    async updateProfile() {
      await updateProfile(getAuth().currentUser, {
        displayName: this.name,
        photoURL: this.phone,
      })
        .then(() => {
          this.emitter.emit('showSpinner', false);
          this.$router.push({ path: '/' });
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
    async signup() {
      this.emitter.emit('showSpinner', true);
      await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          this.updateProfile();
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === 'auth/email-already-in-use') {
            this.emitter.emit('showToast', '이미 존재하는 이메일입니다.');
            this.email = '';
            return false;
          }
        });
    },
  },
};
</script>
