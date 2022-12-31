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
                  class="relative z-10 h-[580px] px-4 py-10 mb-10 overflow-hidden border border-primary shadow-pricing rounded-xl border-opacity-20 sm:py-12 sm:px-4 lg:py-10 lg:px-5 xl:p-104"
                >
                  <span
                    class="block mb-4 text-2xl font-semibold text-primary"
                    v-html="item.title"
                  >
                  </span>
                  <span
                    class="block mb-4 text-lg font-semibold text-primary"
                    v-html="item.classSubName"
                  >
                  </span>
                  <h2 class="text-dark mb-5 text-[42px] font-bold">
                    <span class="text-base font-medium text-body-color">
                      <template v-if="item.type === 'general'">
                        <div>
                          <span class="pr-4 text-3xl font-bold"
                            >{{ getAmount('general').toLocaleString() }}원
                          </span>
                          <select
                            id="country"
                            v-model="selectGeneralOption"
                            class="font-bold text-gray-300 rounded-md w-2/1 form-select"
                            @change="changeSelect(key)"
                          >
                            <option
                              v-for="(item, index) in generalOptionList"
                              :key="index"
                            >
                              {{ item.name }}
                            </option>
                          </select>
                        </div>
                      </template>
                      <div v-if="item.type === 'target'">
                        <span class="pr-4 text-3xl font-bold"
                          >{{ getAmount('target').toLocaleString() }}원</span
                        >
                        <select
                          id="country"
                          v-model="selectTargetOption"
                          class="font-bold text-gray-300 rounded-md w-2/1 form-select"
                          @change="changeSelect(key)"
                        >
                          <option v-for="(item, index) in targetOptionList" :key="index">
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                      <div v-if="item.type === 'peak'">
                        <span class="pr-4 text-3xl font-bold"
                          >{{ getAmount('peak').toLocaleString() }}원</span
                        >
                        <select
                          id="country"
                          v-model="selectPeakOption"
                          class="font-bold text-gray-300 rounded-md w-2/1 form-select"
                          @change="changeSelect(key)"
                        >
                          <option v-for="(item, index) in peakOptionList" :key="index">
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </span>
                  </h2>
                  <div
                    :id="`lessonDiv${key}`"
                    class="h-[253px] mb-4 pb-8 overflow-y-scroll text-sm text-body-color text"
                  >
                    <div
                      v-if="item.type === 'general'"
                      class="mt-2 mb-2 font-bold text-red-500"
                    >
                      3개월 10% / 6개월 20% / 1년 30%
                    </div>
                    <div
                      v-if="item.type === 'target'"
                      class="mt-2 mb-2 font-bold text-red-500"
                    >
                      {{ selectTargetPeriod }}
                    </div>
                    <div
                      v-if="item.type === 'peak'"
                      class="mt-2 mb-2 font-bold text-red-500"
                      v-html="selectPeakInfo"
                    ></div>
                    <div
                      v-if="item.type === 'general' || item.type === 'target'"
                      v-html="item.description"
                    ></div>
                    <div
                      v-else-if="item.type === 'peak'"
                      v-html="
                        selectPeakOption === '지도자과정'
                          ? item.teacherDescription
                          : item.description
                      "
                    ></div>
                  </div>
                  <div>
                    <button
                      class="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white hover:bg-blue-400 hover:font-bold hober:transfrom"
                      @click="openPayScreen(item.type, item.title)"
                    >
                      수업 신청하기
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
      selectGeneralOption: '주 1회',
      selectGeneralAmount: 97000,
      selectTargetOption: '생애 첫요가',
      selectTargetAmount: 39000,
      selectTargetPeriod: '',
      selectPeakOption: '지도자과정',
      selectPeakAmount: 390000,
      selectPeakInfo: '',
      generalOptionList: [
        {
          name: '주 1회',
          amount: 97000,
        },
        {
          name: '주 2회',
          amount: 157000,
        },
        {
          name: '주 3회',
          amount: 207000,
        },
        {
          name: '주 4회',
          amount: 247000,
        },
        {
          name: '주 5회',
          amount: 277000,
        },
        {
          name: '자유 한달',
          amount: 307000,
        },
      ],
      targetOptionList: [
        {
          name: '생애 첫요가',
          amount: 27000,
        },
        {
          name: '일회성 수련',
          amount: 37000,
        },
        {
          name: '다섯번 쿠폰',
          amount: 157000,
          period: '기간 3달',
        },
        {
          name: '열번의 쿠폰',
          amount: 247000,
          period: '기간 5달',
        },
      ],
      peakOptionList: [
        {
          name: '지도자과정',
          amount: 370000,
          info: '월 4회 기준 / (매주 토요일 밤 7 ~ 11) <br />3개월 10% / 6개월 20% / 1년 30%',
        },
        {
          name: '개인레슨 1회',
          amount: 110000,
          info: '1:1 기반 / 연인, 친구 등 소그룹 가능',
        },
        {
          name: '개인레슨 8회',
          amount: 770000,
          info: '기간 3달 / 1:1 기반 / 연인, 친구 등 소그룹 가능',
        },
      ],
      classList: [
        {
          type: 'general',
          title: 'Together 요가프로젝트',
          classSubName: '통합, 역동적, 정적, 매일, 자유, 안정',
          description:
            '<p>가장 통상적인 그룹요가로,<br/> 매일 다른 요가프로젝트만의 역동적, 양적, 정적인 요가입니다.</p><br/><p>하타요가를 뿌리로 하며, 음악과 함께, 그날 함께 하시는 분들의 총체적 상황에 따라 난이도가 결정됩니다.</p><br/><p>남녀노소 누구나 참여하실 수 있으며, 초,중,상급의 옵션이 제시되며, 개인적 상황에 따라 조절을 하셔도 됩니다.</p><br/><p>주1회 수련부터 매일 낮밤으로 신청하실 수 있으며, 시작과 요일을 자유롭게 하실 수 있습니다.</p>',
        },
        {
          type: 'target',
          title: 'Welcome 요가프로젝트',
          classSubName: '경험, 체험, 열린마음, 용기, 도전',
          description:
            '<p>한번 체험을 해보고 싶으시거나, 규칙적인 수련이 어려우신 분들을 위한 쿠폰요가 입니다.</p><br/><p>1회 쿠폰, 10회 쿠폰이 있으며, 요가가 처음이더라도, 자신의 하던 수련 방식이 있더라도, 세상은 넓고 할일은 많으며 요가프로젝트는 매일 변화하고 있습니다.</p><br/><p>마음을 열고, 몸의 어느 쪽이든 요가프로젝트와 함께 자주 또는 때때로 열어가셨으면 좋겠습니다.</p>',
        },
        {
          type: 'peak',
          title: 'Wonderful 요가프로젝트',
          classSubName: '상처, 회복, 성장, 개인적, 목적성',
          description:
            '<p>개인레슨은 프라이빗한 수련을 원하시거나, 개인적 목적성으로 몸과 마음의 어느 부분을 창조, 유지, 파괴를 위해 고안되며 진행하고 있습니다.</p><p>1:1로 진행하거나 가족, 친구, 연인이 함께 하는 소그룹 수련으로 함께 하실 수도 있습니다.</p><p>개인의 목적성과 원하시는 방향에 따라 지도 강사가 배정되며 기간 제한은 없으며 강사와 신청자의 스케줄을 조율, 조절을 하셔서 일정한 시간에 진행됩니다.</p><br/><p>1회도 좋지만 8회를 추천드리며, 8회를 1개월 기준으로 3개월부터 할인이 적용됩니다.</p>',
          teacherDescription:
            '<p>요가프로젝트만의 특별한 과정으로 대표 강사 G1의 14년간의 상처부터 회복에서 성장까지 개인적 수련을 그대로 담아서 진행되고 있습니다.</p><br/><p>매주 토요일 밤 7시부터 11시까지 진행되고 있으며, 요가 지도자의 육체 수련 방식과 요가의 이론을 그날의 교재로 함께 읽고, 의견을 나누며 주어진 시간동안 진행됩니다.</p><br/><p>강사 자격증은 요가프로젝트 자체발급으로 꾸준하게 10개월 이상 임하신 분들께 지급되고 있으며, 1달 또는 1회 신청도 가능합니다.</p>',
        },
      ],
    };
  },
  methods: {
    changeSelect(key) {
      const lessonDiv = document.getElementById('lessonDiv' + key);
      setTimeout(() => {
        lessonDiv.scrollTop = 0;
      }, 100);
    },
    openPayScreen(type, title) {
      let typeName = '';
      let amount = '';
      switch (type) {
        case 'general':
          amount = this.selectGeneralAmount;
          typeName = this.selectGeneralOption;
          break;
        case 'target':
          amount = this.selectTargetAmount;
          typeName = this.selectTargetOption;
          break;
        case 'peak':
          amount = this.selectPeakAmount;
          typeName = this.selectPeakOption;
          break;
      }
      this.$emit('open', { title: title, typeName: typeName, amount: amount });
    },
    getAmount(type) {
      const selectGeneralOption = this.selectGeneralOption;
      const selectTargetOption = this.selectTargetOption;
      const selectPeakOption = this.selectPeakOption;

      if (type === 'general') {
        const selectGeneralAmount = this.generalOptionList.find(
          (item) => item.name === selectGeneralOption
        );
        this.selectGeneralAmount = selectGeneralAmount.amount;
        return this.selectGeneralAmount;
      }

      if (type === 'target') {
        const selectTargetAmount = this.targetOptionList.find(
          (item) => item.name === selectTargetOption
        );
        this.selectTargetPeriod = selectTargetAmount.period;
        this.selectTargetAmount = selectTargetAmount.amount;
        return this.selectTargetAmount;
      }

      if (type === 'peak') {
        const selectPeakAmount = this.peakOptionList.find(
          (item) => item.name === selectPeakOption
        );
        this.selectPeakInfo = selectPeakAmount.info;
        this.selectPeakAmount = selectPeakAmount.amount;
        return this.selectPeakAmount;
      }
    },
  },
};
</script>
