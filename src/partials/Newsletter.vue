<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <!-- CTA box -->
      <div
        class="relative px-8 py-10 bg-purple-600 rounded-md md:py-16 md:px-12"
        data-aos="fade-up"
      >
        <div class="relative flex flex-col items-center justify-between lg:flex-row">
          <!-- CTA content -->
          <div class="mb-6 text-center lg:mr-16 lg:mb-0 lg:text-left lg:w-1/2">
            <h3 class="mb-2 text-white h3">요프 뉴스레터</h3>
            <p class="text-lg text-purple-200">요가 프로젝트 이야기를 구독해보세요.</p>
          </div>

          <!-- CTA form -->
          <form class="w-full lg:w-1/2">
            <div
              class="flex flex-col justify-center max-w-xs mx-auto sm:flex-row sm:max-w-md lg:max-w-none"
            >
              <input
                type="text"
                class="w-[150px] px-4 py-3 mb-2 text-white placeholder-purple-400 bg-purple-700 border border-purple-500 rounded-sm appearance-none focus:border-purple-300 sm:mb-0 sm:mr-2"
                placeholder="이름을 입력하세요."
                aria-label="이름을 입력하세요."
              />
              <input
                type="email"
                class="w-[250px] px-4 py-3 mb-2 text-white placeholder-purple-400 bg-purple-700 border border-purple-500 rounded-sm appearance-none focus:border-purple-300 sm:mb-0 sm:mr-2"
                placeholder="이메일 주소를 입력하세요."
                aria-label="이메일 주소를 입력하세요."
              />
              <a
                class="w-1/2 text-purple-600 bg-purple-100 shadow btn hover:bg-white"
                href="#0"
                >구독하기</a
              >
            </div>
            <!-- Success message -->
            <p
              class="mt-2 text-sm text-lg font-extrabold text-center opacity-75 lg:text-left lg:absolute"
            >
              구독해주셔서 감사합니다 😊
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
};
</script>
