<template>
  <div
    v-if="isShowToast || isShowConfirm"
    style="
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: 100;
      opacity: 0.5;
      border-color: black;
      border-style: solid;
      border-width: 0 0 2000px 0;
    "
  ></div>
  <div
    v-if="isShowConfirm"
    id="toast-undo"
    class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow toast-center dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <button
      type="button"
      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
      data-modal-toggle="popup-modal"
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
    <div class="p-6 text-center">
      <svg
        aria-hidden="true"
        class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        {{ confirmMsg }}
      </h3>
      <button
        data-modal-toggle="popup-modal"
        type="button"
        class="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        @click="confirm"
      >
        예
      </button>
      <button
        data-modal-toggle="popup-modal"
        type="button"
        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        @click="isShowConfirm = false"
      >
        아니요
      </button>
    </div>
  </div>
  <div
    v-if="isShowToast"
    id="toast-undo"
    class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow toast-center dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div class="text-sm font-normal">{{ msg }}</div>
    <div class="flex items-center ml-auto space-x-2">
      <button
        type="button"
        class="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-undo"
        aria-label="Close"
        @click="close"
      >
        <span class="sr-only">Close</span>
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
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowToast: false,
      isShowConfirm: false,
      confirmMsg: '',
      msg: '',
      callback: undefined,
    };
  },
  mounted() {
    this.emitter.on('showConfirm', (confirmInfo) => {
      this.isShowConfirm = confirmInfo.isOpen;
      this.confirmMsg = confirmInfo.msg;
      this.callback = confirmInfo.callback;
      console.log(this.callback);
    });
    this.emitter.on('showToast', this.showToast);
  },
  methods: {
    confirm() {
      this.isShowConfirm = false;
      this.$emit('confirm');
      if (this.callback) {
        this.callback(true);
      }
    },
    close() {
      this.isShowToast = false;
    },
    showToast(msg) {
      this.isShowToast = true;
      this.msg = msg;
    },
    confirmClose() {
      this.isShowConfirm = false;
    },
    showConfrim(msg) {
      this.confirmMsg = msg;
      this.isShowConfirm = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>
