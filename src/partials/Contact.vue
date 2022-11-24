<template>
  <section id="contact" class="relative">
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-6 pb-12 md:pt-6 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-16">
          <h1 class="mb-4 h1" data-aos="fade-up">무엇을 도와드릴까요?</h1>
          <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
            편하게 물어봐주세요.
          </p>
        </div>

        <!-- Contact form -->
        <Form
          v-slot="{ errors, meta }"
          ref="contact"
          class="max-w-xl mx-auto"
          :validation-schema="schema"
          @click.prevent="false"
        >
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3 mb-4 md:mb-0">
              <label class="block mb-1 text-sm font-medium text-gray-300" for="first-name"
                >이름<span class="text-red-600">*</span></label
              >
              <Field
                v-model="fromName"
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
              <label class="block mb-1 text-sm font-medium text-gray-300" for="email"
                >이메일 <span class="text-red-600">*</span></label
              >
              <Field
                v-model="fromEmail"
                as="input"
                type="email"
                name="이메일"
                class="w-full text-gray-300 form-input"
                :class="{ 'border-red-500 focus:border-red-500': errors.이메일 }"
                placeholder="이름을 입력해주세요."
                rules="required"
              />
              <span class="mt-2 text-sm text-red-500">{{ errors.이메일 }}</span>
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label class="block mb-1 text-sm font-medium text-gray-300" for="subject"
                >전화번호 <span class="text-red-600">*</span></label
              >
              <Field
                v-model="fromPhone"
                as="input"
                type="text"
                name="전화번호"
                class="w-full text-gray-300 form-input"
                :class="{ 'border-red-500 focus:border-red-500': errors.전화번호 }"
                rules="required"
                placeholder="전화번호를 입력해주세요."
              />
              <span class="mt-2 text-sm text-red-500">{{ errors.전화번호 }}</span>
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label class="block mb-1 text-sm font-medium text-gray-300" for="message"
                >궁금한 점</label
              >
              <Field
                v-model="message"
                as="textarea"
                name="궁금한점"
                rows="4"
                class="w-full text-gray-300 form-textarea"
                :class="{ 'border-red-500 focus:border-red-500': errors.궁금한점 }"
                placeholder="궁금한 점을 남겨주세요."
              ></Field>
              <span class="mt-2 text-sm text-red-500">{{ errors.궁금한점 }}</span>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 -mx-3">
            <div class="w-full px-3">
              <button
                class="w-full text-white bg-purple-600 cursor-pointer btn hover:bg-purple-700 disabled:opacity-25"
                :disabled="!meta.valid"
                @click="sendEmail"
              >
                보내기
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
import Header from './../partials/Header.vue';
import PageIllustration from '../partials/PageIllustration.vue';
import CtaContact from './../partials/CtaContact.vue';
import Footer from './../partials/Footer.vue';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, numeric } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import emailjs from '@emailjs/browser';

defineRule('required', required);
defineRule('email', email);
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
      email: '{field}을 정확히 입력해주세요.',
      numeric: '{field}은 숫자만 입력할 수 있습니다.',
    },
  }),
});

export default {
  name: 'Contact',
  components: {
    Field,
    Form,
    ErrorMessage,
    Header,
    PageIllustration,
    CtaContact,
    Footer,
  },
  data() {
    return {
      isPersonal: true,
      fromName: '',
      fromEmail: '',
      fromPhone: '',
      message: '',
      schema: {
        이름: 'required',
        전화번호: 'required|numeric|phone_valid',
        이메일: 'required|email',
        궁금한점: 'required',
      },
    };
  },
  mounted() {},
  methods: {
    sendEmail() {
      this.emitter.emit('showConfirm', {
        isOpen: true,
        msg: '개인정보 수집에 동의하십니까?',
        callback: (confirm) => {
          if (confirm) {
            const templateParams = {
              from_name: this.fromName,
              reply_to: this.fromEmail,
              message: this.message,
              from_phone: this.fromPhone,
              agreement: this.agreement,
            };
            this.emitter.emit('showSpinner', true);
            emailjs
              .send(
                'service_vqus4pq',
                'template_9to2m4d',
                templateParams,
                'pHSl8pLQFMme-TogU'
              )
              .then(
                (response) => {
                  if (response.status === 200) {
                    this.emitter.emit('showSpinner', false);
                    this.$refs.contact.resetForm();
                    this.emitter.emit('showToast', '메일이 전송되었습니다.');
                  }
                },
                (err) => {
                  console.log('FAILED...', err);
                }
              );
          } else {
            console.log(false);
          }
        },
      });
    },
  },
};
</script>
