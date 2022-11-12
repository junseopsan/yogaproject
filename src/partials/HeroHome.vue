<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Hero content -->
      <div class="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <!-- Section header -->
        <div class="max-w-xl pb-12 mx-auto text-right md:pb-16">
          <h1 class="mb-4 h1" data-aos="fade-up">느리지도 급하지도 않게</h1>
          <p
            class="mb-8 text-xl font-bold text-right text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span class="h3">DEAR YOGA,</span><br /><br />
            안녕하세요 요프입니다.<br />
            다시 호흡과 정돈을 해봅니다.<br /><br />
            칼융의 말에 힘입어 힘과 유연함도,<br />
            싫음도, 힘듦과 편함도, 느림과 빠름도,<br />
            삶에서 뱀처럼 좌우를 치며 결국엔 위로 <br /><br />
            요가 프로젝트가 단순한 육체활동 보다는<br />
            모든 감각과 호흡처럼 삶의 다양한 범주를<br />
            총체적으로 포함했으면 좋겠습니다. 생활속의<br />
            줌인과 줌아웃을 잘하기 위해 삶과 매트에서<br />
            같은 방식으로 연습하고 있겠습니다.<br /><br />
            결국 모든 것이 제자리로 돌아가게 된다는 말에서<br />
            제자리의 위치는 행복과 온전함이라고 믿고 있어요.<br />
            우리는 우리에게 힘입어 다 잘될 거라고 그랬습니다.<br />
            지금 이 순간에 들어오고 나가는 숨이 온전하길,<br />
            나마스떼,<br /><br />

            <span class="h3">FROM PROJECT</span>
          </p>
        </div>

        <!-- Hero image -->
        <div>
          <div
            class="relative flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              class="mx-auto"
              src="../images/yp/yp.jpeg"
              width="1024"
              height="504"
              alt="Hero"
            />
          </div>

          <!-- Modal -->
          <Modal
            id="modal"
            aria-label="modal-headline"
            :show="videoModalOpen"
            @handleClose="videoModalOpen = false"
          >
            <div class="relative pb-9/16">
              <iframe
                class="absolute w-full h-full"
                src="https://player.vimeo.com/video/174002812"
                title="Video"
                allowFullScreen
              ></iframe>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Modal from './../utils/Modal.vue';

export default {
  name: 'HeroHome',
  components: {
    Modal,
  },
  data: function () {
    return {
      videoModalOpen: false,
    };
  },
};
</script>
