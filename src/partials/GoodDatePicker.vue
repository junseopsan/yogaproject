<template>
  <div class="relative">
    <flat-pickr
      v-model="getDate"
      class="font-medium form-input pl-9 bg-gray-50 disabled:opacity-60 disabled:font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      :config="config"
      :disabled="disabled"
    ></flat-pickr>
    <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
      <svg class="w-4 h-4 ml-3 fill-current text-slate-500" viewBox="0 0 16 16">
        <path
          d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import moment from 'moment';
export default {
  name: 'Datepicker',
  components: {
    flatPickr,
  },
  props: {
    align: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data(props) {
    return {
      date: null, // refer to https://github.com/ankurk91/vue-flatpickr-component
      config: {
        static: true,
        monthSelectorType: 'static',
        dateFormat: 'Y-m-d',
        minDate: 'today',
        defaultDate: [moment().format('YYYY-MM-DD')],
        prevArrow:
          '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow:
          '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        onReady: (selectedDates, dateStr, instance) => {
          instance.element.value = dateStr.replace('to', '-');
          const customClass = props.align ? props.align : '';
          instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
        },
        onChange: (selectedDates, dateStr, instance) => {
          instance.element.value = dateStr.replace('to', '-');
          console.log(dateStr.replace('to', '-'));
          this.$emit('input', dateStr.replace('to', '-')); // 부모에게 값이 변경되었다는 것을 알림
        },
      },
    };
  },
  computed: {
    getDate() {
      return this.value;
    },
  },
};
</script>
