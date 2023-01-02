<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->
      <div class="flex justify-end mt-5">
        <button
          class="ml-3 text-white bg-blue-600 rounded-md font-bolder btn-sm hover:bg-blue-700"
          @click="openModal('add')"
        >
          등록
        </button>
      </div>
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
                      >순서</label
                    >
                    <Field
                      v-model="updateInfo.number"
                      as="input"
                      name="순서"
                      class="w-full text-gray-300 form-input"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.순서,
                      }"
                      placeholder="순서를 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.순서 }}</span>
                  </div>
                  <div>
                    <label
                      for="title"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >제목</label
                    >
                    <Field
                      v-model="updateInfo.title"
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
                      for="content"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >내용</label
                    >
                    <Field
                      v-model="updateInfo.content"
                      as="textarea"
                      name="내용"
                      class="w-full text-gray-300 form-input h-[150px]"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.내용,
                      }"
                      placeholder="내용를 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.내용 }}</span>
                  </div>
                  <div>
                    <label
                      for="content"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >노출여부</label
                    >
                    <Field
                      v-model="updateInfo.isDisplay"
                      as="select"
                      name="노출여부"
                      class="w-full text-gray-300 form-input"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.노출여부,
                      }"
                    >
                      <option
                        v-for="(item, key) in ['Yes', 'No']"
                        :key="key"
                        :value="item"
                        :selected="item"
                      >
                        {{ item }}
                      </option>
                    </Field>
                    <span class="mt-2 text-sm text-red-500">{{ errors.노출여부 }}</span>
                  </div>
                  <button
                    v-if="isAdd"
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 mt-8"
                    :disabled="!meta.valid"
                    @click="addNotice"
                  >
                    등록하기
                  </button>
                  <button
                    v-if="!isAdd"
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 mt-8"
                    :disabled="!meta.valid"
                    @click="updateNotice"
                  >
                    변경하기
                  </button>
                  <button
                    v-if="!isAdd"
                    type="submit"
                    class="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-bredlue-600 dark:hover:bg-red-700 dark:focus:ring-red-800 disabled:opacity-25 mt-8"
                    :disabled="!meta.valid"
                    @click="deleteNotice"
                  >
                    삭제하기
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
                class="px-4 py-2 font-medium text-left text-center text-gray-900 whitespace-nowrap"
              >
                <div class="flex items-center gap-2">순서</div>
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center gap-2">제목</div>
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center gap-2">내용</div>
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center gap-2">노출여부</div>
              </th>

              <th
                class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
              ></th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="(item, index) in noticeList"
              :key="index"
              class="cursor-pointer hover:bg-gray-400"
            >
              <td
                class="w-[20px] px-4 py-2 text-center text-gray-700 whitespace-nowrap dark:bg-white"
              >
                {{ item.number }}
              </td>
              <td
                class="w-[20px] px-4 py-2 text-gray-700 whitespace-nowrap dark:bg-white"
              >
                {{ item.title }}
              </td>
              <td
                class="px-4 py-2 text-gray-700 break-all whitespace-pre-line dark:bg-white"
              >
                {{ item.content }}
              </td>
              <td
                class="w-[20px] px-4 py-2 text-gray-700 whitespace-nowrap dark:bg-white text-center"
              >
                {{ item.isDisplay }}
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
import Header from '../partials/Header.vue';
import Footer from '../partials/Footer.vue';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, numeric } from '@vee-validate/rules';
import { db } from './../main';
import { localize } from '@vee-validate/i18n';
import { v4 as uuidv4 } from 'uuid';
defineRule('required', required);
defineRule('numeric', numeric);
configure({
  // create and set a localization handler
  generateMessage: localize('en', {
    messages: {
      required: '{field}을/를 입력해주세요.',
      numeric: '{field}은/는 숫자만 입력할 수 있습니다.',
    },
  }),
});
export default {
  name: 'NoticeAdmin',
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
      isAdd: false,
      noticeList: [],
      modalOpen: false,
      updateInfo: {
        number: 0,
        docId: '',
        title: '',
        content: '',
        isDisplay: 'Yes',
      },
      schema: {
        순서: 'required|numeric',
        제목: 'required',
        내용: 'required',
        노출여부: 'required',
      },
    };
  },
  async mounted() {
    this.getNotice();
  },
  methods: {
    async openModal(title) {
      this.modalOpen = true;

      if (title === 'add') {
        this.isAdd = true;
        this.$refs.form.resetForm();
        this.updateInfo.number = 0;
        this.updateInfo.docId = '';
        this.updateInfo.title = '';
        this.updateInfo.content = '';

        setTimeout(() => {
          this.updateInfo.isDisplay = 'Yes';
        }, 100);
      }

      if (title !== 'add') {
        this.isAdd = false;
        const notice = collection(db, 'notice');
        const q = query(notice, where('title', '==', title));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((result) => {
          const data = result.data();
          const updateInfo = this.updateInfo;

          updateInfo.number = data.number;
          updateInfo.title = data.title;
          updateInfo.content = data.content;
          updateInfo.isDisplay = data.isDisplay;
          updateInfo.docId = result.id;
        });
      }
    },
    async addNotice() {
      const updateInfo = this.updateInfo;
      const data = {
        number: updateInfo.number,
        title: updateInfo.title,
        content: updateInfo.content,
        isDisplay: updateInfo.isDisplay,
      };
      const uuid = uuidv4();
      await setDoc(doc(db, 'notice', uuid), data)
        .then(() => {
          this.emitter.emit('showToast', '성공적으로 등록되었습니다.');
          this.modalOpen = false;
          this.getNotice();
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
    updateNotice() {
      const updateInfo = this.updateInfo;
      const docId = updateInfo.docId;
      if (docId !== '') {
        const docRef = doc(db, 'notice', docId);
        const data = {
          number: updateInfo.number,
          title: updateInfo.title,
          content: updateInfo.content,
          isDisplay: updateInfo.isDisplay,
        };
        setDoc(docRef, data)
          .then(() => {
            this.emitter.emit('showToast', '성공적으로 변경되었습니다.');
            this.modalOpen = false;
            this.getNotice();
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
    },
    async deleteNotice() {
      this.emitter.emit('showConfirm', {
        isOpen: true,
        msg: '정말 삭제하시겠습니까?',
        callback: async (confirm) => {
          if (confirm) {
            const updateInfo = this.updateInfo;
            const docId = updateInfo.docId;

            if (docId !== '') {
              await deleteDoc(doc(db, 'notice', docId)).then(() => {
                this.emitter.emit('showToast', '성공적으로 삭제되었습니다.');
                this.modalOpen = false;
                this.getNotice();
              });
            }
          } else {
            console.log(false);
          }
        },
      });
    },
    close() {
      this.modalOpen = false;
    },
    async getNotice() {
      const querySnapshot = await getDocs(collection(db, 'notice'));
      const list = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        list.push({
          number: data.number,
          title: data.title,
          content: data.content,
          isDisplay: data.isDisplay,
        });
      });

      this.noticeList = list.sort((a, b) => a.number - b.number);
    },
  },
};
</script>
