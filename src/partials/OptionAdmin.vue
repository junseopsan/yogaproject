<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->
      <div class="flex justify-between mt-5">
        <div class="">
          <select
            id="country"
            v-model="selectOption"
            class="font-bold text-gray-300 rounded-md w-2/1 form-select"
            @change="(val) => changeOptionList(val)"
          >
            <option v-for="(item, index) in ['general', 'target', 'peak']" :key="index">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="">
          <button
            class="ml-3 text-white bg-blue-600 rounded-md font-bolder btn-sm hover:bg-blue-700"
            @click="openModal('add')"
          >
            추가
          </button>
        </div>
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
                      for="type"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >타입</label
                    >
                    <Field
                      v-model="optionInfo.type"
                      as="select"
                      name="타입"
                      class="w-full text-gray-300 form-input disabled:opacity-25"
                      :disabled="!isAdd"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.타입,
                      }"
                    >
                      <option
                        v-for="(item, key) in ['general', 'target', 'peak']"
                        :key="key"
                        :value="item"
                        :selected="item"
                      >
                        {{ item }}
                      </option>
                    </Field>
                    <span class="mt-2 text-sm text-red-500">{{ errors.타입 }}</span>
                  </div>
                  <div>
                    <label
                      for="number"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >순서</label
                    >
                    <Field
                      v-model="optionInfo.number"
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
                      >옵션명</label
                    >
                    <Field
                      v-model="optionInfo.name"
                      as="input"
                      name="옵션명"
                      class="w-full text-gray-300 form-input"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.옵션명,
                      }"
                      placeholder="옵션명을 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.옵션명 }}</span>
                  </div>
                  <div>
                    <label
                      for="content"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >옵션가격</label
                    >
                    <Field
                      v-model="optionInfo.amount"
                      as="input"
                      name="옵션가격"
                      class="w-full text-gray-300 form-input"
                      :class="{
                        'border-red-500 focus:border-red-500': errors.옵션가격,
                      }"
                      placeholder="옵션가격을 입력해주세요."
                    />
                    <span class="mt-2 text-sm text-red-500">{{ errors.옵션가격 }}</span>
                  </div>
                  <div>
                    <label
                      for="content"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >노출여부</label
                    >
                    <Field
                      v-model="optionInfo.isDisplay"
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
                  <div v-if="selectOption !== 'general'">
                    <label
                      for="content"
                      class="block mb-1 font-bold text-gray-900 text-md dark:text-white"
                      >정보</label
                    >
                    <Field
                      v-model="optionInfo.info"
                      as="textarea"
                      name="정보"
                      class="w-full text-gray-300 form-input h-[100px]"
                      placeholder="정보를 입력해주세요."
                    />
                  </div>
                  <button
                    v-if="isAdd"
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 mt-8"
                    :disabled="!meta.valid"
                    @click="addOption"
                  >
                    추가하기
                  </button>
                  <button
                    v-if="!isAdd"
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 mt-8"
                    :disabled="!meta.valid"
                    @click="updateOption"
                  >
                    변경하기
                  </button>
                  <button
                    v-if="!isAdd"
                    type="submit"
                    class="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-bredlue-600 dark:hover:bg-red-700 dark:focus:ring-red-800 disabled:opacity-25 mt-8"
                    :disabled="!meta.valid"
                    @click="deleteOption"
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
                class="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                <div class="text-center">타입</div>
              </th>
              <th
                class="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                <div class="text-center">순서</div>
              </th>
              <th
                class="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                <div class="text-center">옵션명</div>
              </th>
              <th
                class="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                <div class="text-center">옵션가격</div>
              </th>
              <th
                class="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                <div class="text-center">노출여부</div>
              </th>
              <th
                v-if="selectOption !== 'general'"
                class="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                <div class="text-center">정보</div>
              </th>
              <th
                class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
              ></th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="(item, index) in optionList"
              :key="index"
              class="cursor-pointer hover:bg-gray-400"
            >
              <td
                class="w-[20px] px-4 py-2 text-center text-gray-700 whitespace-nowrap dark:bg-white"
              >
                {{ item.type }}
              </td>
              <td
                class="w-[10px] px-4 py-2 text-center text-gray-700 whitespace-nowrap dark:bg-white"
              >
                {{ item.number }}
              </td>
              <td
                class="w-[50px] px-4 py-2 text-gray-700 whitespace-nowrap dark:bg-white text-center"
              >
                {{ item.name }}
              </td>
              <td
                class="w-[50px] px-4 py-2 text-gray-700 break-all whitespace-pre-line dark:bg-white text-center"
              >
                {{ item.amount.toLocaleString() }}
              </td>
              <td
                class="w-[20px] px-4 py-2 text-gray-700 whitespace-nowrap dark:bg-white text-center"
              >
                {{ item.isDisplay }}
              </td>
              <td
                v-if="selectOption !== 'general'"
                class="w-[100px] px-4 py-2 text-gray-700 whitespace-pre-line dark:bg-white text-center"
              >
                {{ item.info }}
              </td>
              <td
                class="w-[20px] px-4 py-2 text-gray-700 whitespace-nowrap dark:bg-white text-center"
              >
                <button
                  class="ml-3 text-white bg-blue-600 rounded-md font-bolder btn-sm hover:bg-blue-700"
                  @click="openModal(item.name)"
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
import { required } from '@vee-validate/rules';
import { db } from '../main';
import { localize } from '@vee-validate/i18n';
import { v4 as uuidv4 } from 'uuid';

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
  name: 'OptionAdmin',
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
      selectOption: 'general',
      originList: [],
      optionList: [],
      modalOpen: false,
      optionInfo: {
        type: 'general',
        number: 0,
        name: '',
        amount: '',
        info: '',
        isDisplay: 'Yes',
        docId: '',
      },
      schema: {
        타입: 'required',
        순서: 'required',
        옵션명: 'required',
        옵션가격: 'required',
        노출여부: 'required',
      },
    };
  },
  async mounted() {
    this.getOptions();
  },
  methods: {
    async openModal(name) {
      this.modalOpen = true;

      if (name === 'add') {
        this.isAdd = true;
        this.$refs.form.resetForm();
        this.optionInfo.number = 0;
        this.optionInfo.name = '';
        this.optionInfo.amount = 0;
        this.optionInfo.docId = '';

        setTimeout(() => {
          if (this.selectOption !== 'general') this.optionInfo.info = '-';
          this.optionInfo.type = this.selectOption;
          this.optionInfo.isDisplay = 'Yes';
        }, 100);
      }

      if (name !== 'add') {
        this.isAdd = false;
        const notice = collection(db, 'option');
        const q = query(notice, where('name', '==', name));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((result) => {
          const data = result.data();
          const optionInfo = this.optionInfo;
          optionInfo.type = data.type;
          optionInfo.number = data.number;
          optionInfo.name = data.name;
          optionInfo.amount = data.amount;
          optionInfo.isDisplay = data.isDisplay;
          optionInfo.docId = result.id;

          if (this.selectOption !== 'general') this.optionInfo.info = data.info;
        });
      }
    },
    async addOption() {
      const optionInfo = this.optionInfo;
      const data = {
        type: optionInfo.type,
        number: Number(optionInfo.number),
        name: optionInfo.name,
        amount: Number(optionInfo.amount),
        isDisplay: optionInfo.isDisplay,
      };
      if (this.selectOption !== 'general') {
        if (this.optionInfo.info === '') {
          this.emitter.emit('showToast', '정보를 입력해주세요.');
          return false;
        }
        data.info = this.optionInfo.info;
      }

      const uuid = uuidv4();
      await setDoc(doc(db, 'option', `${optionInfo.type}-${uuid}`), data)
        .then(() => {
          this.emitter.emit('showToast', '성공적으로 추가되었습니다.');
          this.modalOpen = false;
          this.getOptions();
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
    updateOption() {
      const optionInfo = this.optionInfo;
      const docId = optionInfo.docId;
      if (docId !== '') {
        const docRef = doc(db, 'option', docId);
        const data = {
          type: optionInfo.type,
          number: Number(optionInfo.number),
          name: optionInfo.name,
          amount: Number(optionInfo.amount),
          isDisplay: optionInfo.isDisplay,
        };
        if (this.selectOption !== 'general') {
          if (this.optionInfo.info === '') {
            this.emitter.emit('showToast', '정보를 입력해주세요.');
            return false;
          }
          data.info = optionInfo.info;
        }
        setDoc(docRef, data)
          .then(() => {
            this.emitter.emit('showToast', '성공적으로 변경되었습니다.');
            this.modalOpen = false;
            this.getOptions();
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
    },
    async deleteOption() {
      this.emitter.emit('showConfirm', {
        isOpen: true,
        msg: '정말 삭제하시겠습니까?',
        callback: async (confirm) => {
          if (confirm) {
            const optionInfo = this.optionInfo;
            const docId = optionInfo.docId;
            if (docId !== '') {
              await deleteDoc(doc(db, 'option', docId)).then(() => {
                this.emitter.emit('showToast', '성공적으로 삭제되었습니다.');
                this.modalOpen = false;
                this.getOptions();
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
    async getOptions() {
      const querySnapshot = await getDocs(collection(db, 'option'));
      const list = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        list.push({
          type: data.type,
          number: data.number,
          name: data.name,
          amount: data.amount,
          isDisplay: data.isDisplay,
          info: data.info,
        });
      });

      this.originList = list.sort((a, b) => a.number - b.number);

      this.optionList = list
        .sort((a, b) => a.number - b.number)
        .filter((item) => item.type === this.selectOption);
    },
    changeOptionList(event) {
      this.optionList = this.originList
        .sort((a, b) => a.number - b.number)
        .filter((item) => item.type === event.target.value);
    },
  },
};
</script>
