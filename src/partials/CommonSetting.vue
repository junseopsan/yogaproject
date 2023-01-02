<template>
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
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
            >메인 제목<span class="text-red-600">*</span></label
          >
          <Field
            v-model="mainTitle"
            as="textarea"
            name="메인제목"
            type="text"
            class="w-full text-gray-300 form-input"
            :class="{
              'border-red-500 focus:border-red-500': errors.메인제목,
            }"
            placeholder="메인제목을 입력해주세요."
            rules="required"
          />
          <span class="mt-2 text-sm text-red-500">{{ errors.메인제목 }}</span>
        </div>
        <div class="w-full px-3 mt-3">
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
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
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
            >낮 설명<span class="text-red-600">*</span></label
          >
          <Field
            v-model="dayDescription"
            as="textarea"
            name="낮설명"
            type="text"
            class="w-full text-gray-300 form-input h-[120px]"
            :class="{
              'border-red-500 focus:border-red-500': errors.낮설명,
            }"
            placeholder="낮 설명을 입력해주세요."
            rules="required"
          />
          <span class="mt-2 text-sm text-red-500">{{ errors.낮설명 }}</span>
        </div>
        <div class="w-full px-3 mt-3">
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
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
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
            >밤 설명 <span class="text-red-600">*</span></label
          >
          <Field
            v-model="nightDescription"
            as="textarea"
            name="밤설명"
            type="text"
            class="w-full text-gray-300 form-input h-[120px]"
            :class="{
              'border-red-500 focus:border-red-500': errors.밤설명,
            }"
            placeholder="밤 설명을 입력해주세요."
            rules="required"
          />
          <span class="mt-2 text-sm text-red-500">{{ errors.밤설명 }}</span>
        </div>
        <div class="w-full px-3 mt-3">
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
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
          <span class="mt-2 text-sm text-red-500">{{ errors.온라인시간 }}</span>
        </div>
        <div class="w-full px-3 mt-3">
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
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
          <span class="mt-2 text-sm text-red-500">{{ errors.온라인설명 }}</span>
        </div>
        <div class="w-full px-3 mt-3">
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
            >수련 방식 제목<span class="text-red-600">*</span></label
          >
          <Field
            v-model="classTitle"
            as="input"
            name="수련방식제목"
            type="text"
            class="w-full text-gray-300 form-input"
            :class="{
              'border-red-500 focus:border-red-500': errors.수련방식제목,
            }"
            placeholder="수련 방식 제목을 입력해주세요."
            rules="required"
          />
          <span class="mt-2 text-sm text-red-500">{{ errors.수련방식제목 }}</span>
        </div>
        <div class="w-full px-3 mt-3">
          <label class="block mb-1 text-sm font-medium text-gray-300" for="full-name"
            >수련 방식 설명 <span class="text-red-600">*</span></label
          >
          <Field
            v-model="classDescription"
            as="textarea"
            name="수련방식설명"
            type="text"
            class="w-full text-gray-300 form-input h-[120px]"
            :class="{
              'border-red-500 focus:border-red-500': errors.수련방식설명,
            }"
            placeholder="수련 방식 설명을 입력해주세요."
            rules="required"
          />
          <span class="mt-2 text-sm text-red-500">{{ errors.수련방식설명 }}</span>
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
      required: '{field}을/를 입력해주세요.',
    },
  }),
});

export default {
  name: 'CommonSetting',
  components: {
    Header,
    Footer,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      mainTitle: '" 행복하세요.<br />밝게 지내요. <br />있는 그대로의 자신이 되세요. ',
      dayTime: '월화수목금토일 낮 2시 30분',
      dayDescription:
        '상황에 따라서 차담, 다식 등의 시간<br />완벽할 순 없어도, 때론 온전하지 않아도<br />최선의 노력과 만족은 있기를',
      nightTime: '월화수목금 밤 7시 30분',
      nightDescription:
        '요프의 시간은 칼처럼 시작하거나<br />끝나지 않으니, 이점 참고하셔서',
      onlineTime: '온라인 동시진행',
      onlineDescription: '모든 수업은 온라인요가 (Zoom)<br />동시진행',
      classTitle: '수련 방식',
      classDescription:
        '요즘 요프는 몸과 마음의 이완으로 시작하여, 각성으로 진입하고 다시 이완으로 종료됩니다. <br />이완과 각성은 총체적으로 보는게 좋지 않을까 싶어요.<br />각자의 상황과 큰 상황 전체를 연결하는 수련을 합시다.',
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
        this.mainTitle = data.mainTitle;
        this.dayTime = data.dayTime;
        this.dayDescription = data.dayDescription;
        this.nightTime = data.nightTime;
        this.nightDescription = data.nightDescription;
        this.onlineTime = data.onlineTime;
        this.onlineDescription = data.onlineDescription;
        this.classTitle = data.classTitle;
        this.classDescription = data.classDescription;
      });
    },
    updateCommon() {
      const docRef = doc(db, 'yogaproject', 'common');

      const data = {
        mainTitle: this.mainTitle,
        dayTime: this.dayTime,
        dayDescription: this.dayDescription,
        nightTime: this.nightTime,
        nightDescription: this.nightDescription,
        onlineTime: this.onlineTime,
        onlineDescription: this.onlineDescription,
        classTitle: this.classTitle,
        classDescription: this.classDescription,
      };

      setDoc(docRef, data)
        .then(() => {
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
