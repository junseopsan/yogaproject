<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-100 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="show"
      class="fixed inset-0 z-50 transition-opacity bg-black bg-opacity-75"
      aria-hidden="true"
    ></div>
  </transition>

  <!-- Modal dialog -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="scale-95 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-out"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-95 opacity-0"
  >
    <div
      v-show="show"
      :id="id"
      class="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden transform sm:px-6"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="ariaLabel"
    >
      <div ref="modalContent" class="w-full max-w-2xl max-h-full overflow-auto">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    id: {
      type: String,
      default: null,
    },
    ariaLabel: {
      type: String,
      default: null,
    },
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  emits: ['handleClose'],
  mounted() {
    document.addEventListener('click', this.clickOutside);
    // document.addEventListener('keydown', this.keyPress);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickOutside);
    // document.removeEventListener('keydown', this.keyPress);
  },
  methods: {
    clickOutside(e) {
      if (this.show || this.$refs.modalContent.contains(e.target)) return;
      this.$emit('handleClose');
    },
    keyPress() {
      if (!this.show || event.keyCode !== 27) return;
      this.$emit('handleClose');
    },
  },
};
</script>
