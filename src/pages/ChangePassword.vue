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
              <h1 class="h1">Namaste</h1>
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
                <div class="flex flex-wrap mb-4 -mx-3">
                  <div class="w-full px-3">
                    <label
                      class="block mb-1 text-sm font-medium text-gray-300"
                      for="password"
                      >비밀번호 확인<span class="text-red-600">*</span></label
                    >
                    <Field
                      v-model="newpassword"
                      as="input"
                      type="password"
                      name="재입력비밀번호"
                      class="w-full text-gray-300 form-input"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.재입력비밀번호,
                      }"
                      placeholder="비밀번호를 재입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{
                      errors.재입력비밀번호
                    }}</span>
                  </div>
                </div>
                <div class="flex flex-wrap mt-6 -mx-3">
                  <div class="w-full px-3">
                    <button
                      class="w-full text-white bg-blue-600 cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      :disabled="!meta.valid"
                      @click="updateProfile()"
                    >
                      비밀번호 변경
                    </button>
                  </div>
                  <div class="w-full px-3">
                    <button
                      class="w-full mt-3 text-white bg-blue-600 cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                      @click="$router.push({ path: '/profile' })"
                    >
                      이전
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
import Header from '../partials/Header.vue';
import Footer from '../partials/Footer.vue';
import { getAuth, onAuthStateChanged, updatePassword } from 'firebase/auth';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

defineRule('required', required);
defineRule('password_valid', (value) => {
  const regExp = /^.{8,}$/;

  if (!regExp.test(value)) {
    return '최소 8자 이상 입력해주세요.';
  } else {
    return true;
  }
});
configure({
  // create and set a localization handler
  generateMessage: localize('en', {
    messages: {
      required: '{field}을 입력해주세요.',
    },
  }),
});

export default {
  name: 'Profile',
  components: {
    Header,
    Footer,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      password: '',
      newpassword: '',
      schema: {
        비밀번호: 'required|password_valid',
        재입력비밀번호: 'required|password_valid',
      },
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    async updateProfile() {
      const auth = getAuth();
      const user = auth.currentUser;

      if (this.password !== this.newpassword) {
        this.emitter.emit('showToast', '비밀번호가 일치하지 않습니다.');
      }

      await updatePassword(user, this.password)
        .then(() => {
          this.emitter.emit('showToast', '비밀번호가 변경되었습니다.');
          // this.$router.push({ path: '/' });
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
  },
};
</script>
