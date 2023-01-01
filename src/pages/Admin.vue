<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <section class="relative">
        <div class="max-w-6xl px-4 mx-auto sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="max-w-3xl mx-auto">
              <ul class="flex border-b border-gray-100">
                <li
                  v-for="(item, key) in ['시간표', '수업']"
                  :key="key"
                  class="flex-1 cursor-pointer"
                  @click="type = item"
                >
                  <div class="relative block p-4">
                    <span
                      v-if="item === type"
                      class="absolute inset-x-0 w-full h-px bg-blue-600 -bottom-px"
                    ></span>

                    <div class="flex items-center justify-center">
                      <span class="ml-3 text-xl font-bold text-white-900">
                        {{ item }}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div v-if="type === '시간표'" class="mt-5">
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
                          >메인 제목<span class="text-red-600">*</span></label
                        >
                        <Field
                          v-model="mainTitle"
                          as="input"
                          name="메인제목"
                          type="text"
                          class="w-full text-gray-300 form-input"
                          :class="{
                            'border-red-500 focus:border-red-500': errors.메인제목,
                          }"
                          placeholder="메인제목을 입력해주세요."
                          rules="required"
                        />
                        <span class="mt-2 text-sm text-red-500">{{
                          errors.메인제목
                        }}</span>
                      </div>
                      <div class="w-full px-3 mt-3">
                        <label
                          class="block mb-1 text-sm font-medium text-gray-300"
                          for="full-name"
                          >낮 시간<span class="text-red-600">*</span></label
                        >
                        <Field
                          v-model="dayTime"
                          as="input"
                          name="낮시간"
                          type="text"
                          class="w-full text-gray-300 form-input"
                          :class="{
                            'border-red-500 focus:border-red-500': errors.낮시간,
                          }"
                          placeholder="낮 시간을 입력해주세요."
                          rules="required"
                        />
                        <span class="mt-2 text-sm text-red-500">{{ errors.낮시간 }}</span>
                      </div>
                      <div class="w-full px-3 mt-3">
                        <label
                          class="block mb-1 text-sm font-medium text-gray-300"
                          for="full-name"
                          >낮 설명<span class="text-red-600">*</span></label
                        >
                        <Field
                          v-model="dayDescription"
                          as="input"
                          name="낮설명"
                          type="text"
                          class="w-full text-gray-300 form-input"
                          :class="{
                            'border-red-500 focus:border-red-500': errors.낮설명,
                          }"
                          placeholder="낮 설명을 입력해주세요."
                          rules="required"
                        />
                        <span class="mt-2 text-sm text-red-500">{{ errors.낮설명 }}</span>
                      </div>
                      <div class="w-full px-3 mt-3">
                        <label
                          class="block mb-1 text-sm font-medium text-gray-300"
                          for="full-name"
                          >밤 시간<span class="text-red-600">*</span></label
                        >
                        <Field
                          v-model="nightTime"
                          as="input"
                          name="밤시간"
                          type="text"
                          class="w-full text-gray-300 form-input"
                          :class="{
                            'border-red-500 focus:border-red-500': errors.밤시간,
                          }"
                          placeholder="밤 시간을 입력해주세요."
                          rules="required"
                        />
                        <span class="mt-2 text-sm text-red-500">{{ errors.밤시간 }}</span>
                      </div>
                      <div class="w-full px-3 mt-3">
                        <label
                          class="block mb-1 text-sm font-medium text-gray-300"
                          for="full-name"
                          >밤 설명 <span class="text-red-600">*</span></label
                        >
                        <Field
                          v-model="nightDescription"
                          as="input"
                          name="밤설명"
                          type="text"
                          class="w-full text-gray-300 form-input"
                          :class="{
                            'border-red-500 focus:border-red-500': errors.밤설명,
                          }"
                          placeholder="밤 설명을 입력해주세요."
                          rules="required"
                        />
                        <span class="mt-2 text-sm text-red-500">{{ errors.밤설명 }}</span>
                      </div>
                      <div class="w-full px-3 mt-3">
                        <label
                          class="block mb-1 text-sm font-medium text-gray-300"
                          for="full-name"
                          >온라인 시간 <span class="text-red-600">*</span></label
                        >
                        <Field
                          v-model="onlineTime"
                          as="input"
                          name="온라인시간"
                          type="text"
                          class="w-full text-gray-300 form-input"
                          :class="{
                            'border-red-500 focus:border-red-500': errors.온라인시간,
                          }"
                          placeholder="온라인 시간을 입력해주세요."
                          rules="required"
                        />
                        <span class="mt-2 text-sm text-red-500">{{
                          errors.온라인시간
                        }}</span>
                      </div>
                      <div class="w-full px-3 mt-3">
                        <label
                          class="block mb-1 text-sm font-medium text-gray-300"
                          for="full-name"
                          >온라인 설명 <span class="text-red-600">*</span></label
                        >
                        <Field
                          v-model="onlineDescription"
                          as="input"
                          name="온라인설명"
                          type="text"
                          class="w-full text-gray-300 form-input"
                          :class="{
                            'border-red-500 focus:border-red-500': errors.온라인설명,
                          }"
                          placeholder="온라인 설명을 입력해주세요."
                          rules="required"
                        />
                        <span class="mt-2 text-sm text-red-500">{{
                          errors.온라인설명
                        }}</span>
                      </div>
                    </div>
                    <div class="flex flex-wrap mt-6 -mx-3">
                      <div class="w-full px-3">
                        <button
                          class="w-full text-white bg-blue-600 rounded-md cursor-pointer btn hover:bg-blue-700 disabled:opacity-25"
                          :disabled="!meta.valid"
                          @click="updateCommon()"
                        >
                          변경
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
              <div v-else-if="type === '수업'">aaaa</div>
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
import Header from '../partials/Header.vue';
import Footer from '../partials/Footer.vue';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from './../main';

defineRule('required', required);
configure({
  // create and set a localization handler
  generateMessage: localize('en', {
    messages: {
      required: '{field}을 입력해주세요.',
    },
  }),
});
export default {
  name: 'Admin',
  components: {
    Header,
    Footer,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      type: '시간표',
      mainTitle: '" 행복하세요.<br />밝게 지내요. <br />있는 그대로의 자신이 되세요. ',
      dayTime: '월화수목금토일 낮 2시 30분',
      dayDescription:
        '상황에 따라서 차담, 다식 등의 시간<br />완벽할 순 없어도, 때론 온전하지 않아도<br />최선의 노력과 만족은 있기를',
      nightTime: '월화수목금 밤 7시 30분',
      nightDescription:
        '요프의 시간은 칼처럼 시작하거나<br />끝나지 않으니, 이점 참고하셔서',
      onlineTime: '온라인 동시진행',
      onlineDescription: '모든 수업은 온라인요가 (Zoom)<br />동시진행',
      schema: {
        메인제목: 'required',
        낮시간: 'required',
        낮설명: 'required',
        밤시간: 'required',
        밤설명: 'required',
        온라인시간: 'required',
        온라인설명: 'required',
      },
    };
  },
  mounted() {
    this.getCommonText();
  },
  methods: {
    async getCommonText() {
      const querySnapshot = await getDocs(collection(db, 'yogaproject'));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        this.dayTime = data.dayTime;
        this.dayDescription = data.dayDescription;
        this.nightTime = data.nightTime;
        this.nightDescription = data.nightDescription;
        this.onlineTime = data.onlineTime;
        this.onlineDescription = data.onlineDescription;
      });
    },
    updateCommon() {
      const docRef = doc(db, 'yogaproject', 'common');

      const data = {
        dayTime: this.dayTime,
        dayDescription: this.dayDescription,
        nightTime: this.nightTime,
        nightDescription: this.nightDescription,
        onlineTime: this.onlineTime,
        onlineDescription: this.onlineDescription,
      };

      setDoc(docRef, data)
        .then((result) => {
          console.log('result', result);
          console.log('Success! Word object written to database.');
          this.emitter.emit('showToast', '성공적으로 변경되었습니다.');
          this.getCommonText();
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
  },
};
</script>
