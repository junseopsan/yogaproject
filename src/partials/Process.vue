<template>
  <section id="hero">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-10 pb-12 md:pt-16 md:pb-20">
        <!-- Section header -->
        <!-- Items -->
        <div
          class="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-3 lg:gap-16 md:max-w-none"
        >
          <!-- 1st item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up">
            <div
              aria-hidden="true"
              class="absolute hidden h-1 border-t border-gray-700 border-dashed md:block"
              style="width: calc(100% - 32px); left: calc(50% + 48px); top: 32px"
              data-aos="fade-in"
              data-aos-delay="200"
            ></div>
            <svg
              class="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>

            <h4 class="mb-2 h4">월화수목금토일 낮 2시 30분</h4>
            <p class="text-lg text-center text-gray-400">
              상황에 따라서 차담, 다식 등의 시간<br />
              완벽할 순 없어도, 때론 온전하지 않아도<br />
              최선의 노력과 만족은 있기를
            </p>
          </div>

          <!-- 2nd item -->
          <div
            class="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              aria-hidden="true"
              class="absolute hidden h-1 border-t border-gray-700 border-dashed md:block"
              style="width: calc(100% - 32px); left: calc(50% + 48px); top: 32px"
              data-aos="fade-in"
              data-aos-delay="400"
            ></div>
            <svg
              class="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
            <h4 class="mb-2 h4">월화수목금 밤 7시 30분</h4>
            <p class="text-lg text-center text-gray-400">
              요프의 시간은 칼처럼 시작하거나<br />
              끝나지 않으니, 이점 참고하셔서
            </p>
          </div>

          <!-- 3rd item -->
          <div
            class="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <svg
              class="w-16 h-16 mb-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
              ></path>
            </svg>
            <h4 class="mb-2 h4">온라인 동시진행</h4>
            <p class="text-lg text-center text-gray-400">
              모든 수업은 온라인요가 (Zoom)<br />
              동시진행
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Process',
};
</script>
