<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->
      <div class="mt-3 overflow-hidden overflow-x-auto border border-gray-200 rounded-lg">
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
                  :validation-schema="schema"
                  @click.prevent="false"
                >
                  <div>
                    <label
                      for="number"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >타입</label
                    >
                    <Field
                      v-model="classInfo.type"
                      as="input"
                      name="타입"
                      class="w-full text-gray-300 form-input disabled:opacity-25"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.타입,
                      }"
                      disabled
                      placeholder="타입을 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.타입 }}</span>
                  </div>
                  <div>
                    <label
                      for="title"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >제목</label
                    >
                    <Field
                      v-model="classInfo.title"
                      as="input"
                      name="제목"
                      class="w-full text-gray-300 form-input"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.제목,
                      }"
                      placeholder="제목를 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.제목 }}</span>
                  </div>
                  <div>
                    <label
                      for="title"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >부제목</label
                    >
                    <Field
                      v-model="classInfo.classSubName"
                      as="input"
                      name="부제목"
                      class="w-full text-gray-300 form-input"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.부제목,
                      }"
                      placeholder="부제목을 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.부제목 }}</span>
                  </div>
                  <div>
                    <label
                      for="content"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >설명</label
                    >
                    <Field
                      v-model="classInfo.description"
                      as="textarea"
                      name="설명"
                      class="w-full text-gray-300 form-input h-[150px]"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.설명,
                      }"
                      placeholder="설명을 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.설명 }}</span>
                  </div>
                  <div>
                    <label
                      for="content"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >부가설명</label
                    >
                    <Field
                      v-model="classInfo.teacherDescription"
                      as="textarea"
                      name="부가설명"
                      class="w-full text-gray-300 form-input"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.부가설명,
                      }"
                      placeholder="부가설명을 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.부가설명 }}</span>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 mt-8"
                    :disabled="!meta.valid"
                    @click="updateClass"
                  >
                    변경하기
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </Modal>
        <table class="min-w-full text-sm divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th
                class="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                <div class="text-center">타입</div>
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="text-center">제목</div>
              </th>
              <th
                class="w-[70px] px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
              >
                <div class="text-center">부제목</div>
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="text-center">설명</div>
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="text-center">부가설명</div>
              </th>

              <th
                class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
              ></th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="(item, index) in classList"
              :key="index"
              class="cursor-pointer hover:bg-gray-400"
            >
              <td
                class="w-[10px] px-4 py-2 text-center text-gray-700 whitespace-nowrap dark:bg-white"
              >
                {{ item.type }}
              </td>
              <td
                class="w-[40px] px-4 py-2 text-gray-700 whitespace-pre-line dark:bg-white"
              >
                {{ item.title }}
              </td>
              <td class="w-[70px] px-4 py-2 text-gray-700 break-all dark:bg-white">
                {{ item.classSubName }}
              </td>
              <td
                class="w-[150px] px-4 py-2 text-center text-gray-700 whitespace-pre-line dark:bg-white"
              >
                {{ item.description }}
              </td>
              <td
                class="w-[120px] px-4 py-2 text-center text-gray-700 whitespace-pre-line dark:bg-white"
              >
                {{ item.teacherDescription }}
              </td>
              <td
                class="w-[20px] px-4 py-2 text-gray-700 whitespace-nowrap dark:bg-white text-center"
              >
                <button
                  class="ml-3 text-white bg-blue-600 rounded-md font-bolder btn-sm hover:bg-blue-700"
                  @click="openModal(item.title)"
                >
                  수정
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import Modal from '../utils/Modal.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import { collection, query, where, getDocs, doc, setDoc } from 'firebase/firestore';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { db } from '../main';
import { localize } from '@vee-validate/i18n';
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
  name: 'ClassAdmin',
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
      classList: [],
      modalOpen: false,
      classInfo: {
        number: 0,
        type: '',
        title: '',
        classSubName: '',
        description: '',
        teacherDescription: '',
      },
      schema: {
        타입: 'required',
        제목: 'required',
        부제목: 'required',
        설명: 'required',
        부가설명: 'required',
      },
    };
  },
  async mounted() {
    this.getClass();
  },
  methods: {
    async openModal(title) {
      this.modalOpen = true;

      const classCollection = collection(db, 'class');
      const q = query(classCollection, where('title', '==', title));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((result) => {
        const data = result.data();
        const classInfo = this.classInfo;

        classInfo.number = data.number;
        classInfo.type = data.type;
        classInfo.title = data.title;
        classInfo.classSubName = data.classSubName;
        classInfo.description = data.description;
        classInfo.teacherDescription = data.teacherDescription;
        classInfo.docId = result.id;
      });
    },
    updateClass() {
      const classInfo = this.classInfo;
      const docId = classInfo.docId;
      if (docId !== '') {
        const docRef = doc(db, 'class', docId);
        const data = {
          number: classInfo.number,
          type: classInfo.type,
          title: classInfo.title,
          classSubName: classInfo.classSubName,
          description: classInfo.description,
          teacherDescription: classInfo.teacherDescription,
        };
        setDoc(docRef, data)
          .then(() => {
            this.emitter.emit('showToast', '성공적으로 변경되었습니다.');
            this.modalOpen = false;
            this.getClass();
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
    },
    close() {
      this.modalOpen = false;
    },
    async getClass() {
      const querySnapshot = await getDocs(collection(db, 'class'));
      const list = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        list.push({
          number: data.number,
          type: data.type,
          title: data.title,
          classSubName: data.classSubName,
          description: data.description,
          teacherDescription: data.teacherDescription,
        });
      });

      this.classList = list.sort((a, b) => a.number - b.number);
    },
  },
};
</script>
