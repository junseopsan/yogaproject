<template>
  <section class="relative">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-6 md:pt-6 md:pb-6">
        <div>
          <div class="container mx-auto">
            <div class="flex flex-wrap justify-center -mx-4">
              <div
                v-for="(item, key) in classList"
                :key="key"
                class="w-full px-4 md:w-1/2 lg:w-1/3"
              >
                <div
                  class="h-[400px] relative z-10 py-10 mb-10 overflow-hidden border border-primary shadow-pricing rounded-xl border-opacity-20 px-4 sm:py-12 sm:px-4 lg:py-10 lg:px-5 xl:p-104"
                >
                  <span class="block mb-4 text-lg font-semibold text-primary">
                    {{ item.className }}
                  </span>
                  <h2 class="text-dark mb-5 text-[42px] font-bold">
                    <span class="text-base font-medium text-body-color">
                      <div v-if="item.type === 'general'">
                        <span class="pr-4 text-3xl font-bold"
                          >{{ getTuition(item.tuition, 'general') }}원</span
                        >
                        <select
                          id="country"
                          v-model="selectGeneral"
                          class="font-bold text-gray-300 rounded-md w-2/1 form-select"
                        >
                          <option>주 1회</option>
                          <option>주 3회</option>
                          <option>주 5회</option>
                          <option>자유 한달</option>
                        </select>
                      </div>
                      <div v-if="item.type === 'target'">
                        <span class="pr-4 text-3xl font-bold"
                          >{{ getTuition(item.tuition, 'target') }}원</span
                        >
                        <select
                          id="country"
                          v-model="selectTarget"
                          class="font-bold text-gray-300 rounded-md w-2/1 form-select"
                        >
                          <option>한 번</option>
                          <option>열 번</option>
                        </select>
                      </div>
                      <div v-if="item.type === 'peak'">
                        <span class="pr-4 text-3xl font-bold"
                          >{{ getTuition(item.tuition, 'peak') }}원</span
                        >
                        <select
                          id="country"
                          v-model="selectPeak"
                          class="font-bold text-gray-300 rounded-md w-2/1 form-select"
                        >
                          <option>지도자과정</option>
                          <option>개인레슨</option>
                        </select>
                      </div>
                    </span>
                  </h2>
                  <div class="pb-8 mb-8 text-base text-body-color h-[120px]">
                    <div v-if="item.type === 'general' || item.type === 'target'">
                      {{ item.description }}
                    </div>
                    <div v-else>
                      {{
                        selectPeak === '지도자과정' ? item.description2 : item.description
                      }}
                    </div>
                    <div
                      v-if="item.type === 'general'"
                      class="mt-2 font-bold text-gray-500"
                    >
                      3개월 10% / 6개월 20% / 1년 30%
                    </div>
                    <div
                      v-if="selectTarget === '열 번' && item.type === 'target'"
                      class="mt-2 font-bold text-gray-500"
                    >
                      기간 3개월
                    </div>
                    <div v-if="item.type === 'peak'" class="mt-2 font-bold text-gray-500">
                      <div v-if="selectPeak === '지도자과정'">
                        월 4회 기준 / (매주 토요일 밤 7 ~ 11) <br />
                        3개월 10% / 6개월 20% / 1년 30%
                      </div>
                      <div v-if="selectPeak === '개인레슨'">
                        1:1 기반 / 연인, 친구 등 소그룹 가능
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      class="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white hover:bg-purple-700"
                      @click="openPayScreen(item.type, item.className)"
                    >
                      수업 결제하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingTables',
  components: {},
  data: function () {
    return {
      date: null,
      events: null,
      value: true,
      videoModalOpen: false,
      selectGeneral: '주 1회',
      selectGeneralAmount: 99000,
      selectTarget: '한 번',
      selectTargetAmount: 39000,
      selectPeak: '지도자과정',
      selectPeakAmount: 390000,
      classList: [
        {
          type: 'general',
          className: 'General [그룹요가]',
          tuition: '99000',
          description:
            '가장 통상적으로 하는 그룹수련 입니다. 초급. 중급. 상급의 옵션이 제시됩니다.',
        },
        {
          type: 'target',
          className: ' Target [쿠폰요가]',
          tuition: '39000',
          description: '1회체험, 또는 꾸준한 수련이 어려운 분들을 위한 수련입니다.',
        },
        {
          type: 'peak',
          className: 'Peak [스페셜요가]',
          tuition: '390000',
          description:
            '개인레슨은 기성복이 좋을 때가 있지만 맞춤복이 자신에게 가장 잘 맞을 수도 있습니다.',
          description2:
            '지도자과정은 요가프로젝트에서 진행, 수료되며, 매주 토요일 진행되고 있습니다.',
        },
      ],
    };
  },
  methods: {
    openPayScreen(type, className) {
      let typeName = '';
      let amount = '';
      switch (type) {
        case 'general':
          amount = this.selectGeneralAmount;
          typeName = this.selectGeneral;
          break;
        case 'target':
          amount = this.selectTargetAmount;
          typeName = this.selectTarget;
          break;
        case 'peak':
          amount = this.selectPeakAmount;
          typeName = this.selectPeak;
          break;
      }
      this.$emit('open', { className: className, typeName: typeName, amount: amount });
    },
    changeCommaNubmer(value) {
      return value.toLocaleString();
    },
    getTuition(tuition, type) {
      const selectGeneral = this.selectGeneral;
      const selectTarget = this.selectTarget;
      const selectPeak = this.selectPeak;
      if (type === 'general') {
        switch (selectGeneral) {
          case '주 1회':
            this.selectGeneralAmount = 99000;
            return this.changeCommaNubmer(99000);
          case '주 3회':
            this.selectGeneralAmount = 190000;
            return this.changeCommaNubmer(190000);
          case '주 5회':
            this.selectGeneralAmount = 290000;
            return this.changeCommaNubmer(290000);
          case '자유 한달':
            this.selectGeneralAmount = 390000;
            return this.changeCommaNubmer(390000);
        }
      } else if (type === 'target') {
        switch (selectTarget) {
          case '한 번':
            this.selectTargetAmount = 39000;
            return this.changeCommaNubmer(39000);
          case '열 번':
            this.selectTargetAmount = 290000;
            return this.changeCommaNubmer(290000);
        }
      } else if (type === 'peak') {
        switch (selectPeak) {
          case '지도자과정':
            this.selectPeakAmount = 390000;
            return this.changeCommaNubmer(390000);
          case '개인레슨':
            this.selectPeakAmount = 110000;
            return this.changeCommaNubmer(110000);
        }
      }
    },
  },
};
</script>
