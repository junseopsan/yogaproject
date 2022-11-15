<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Hero content -->
      <div class="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <!-- Section header -->
        <div class="max-w-xl pb-12 mx-auto text-right md:pb-16">
          <h1 class="mb-4 h1" data-aos="fade-up">{{ mainText }}</h1>
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
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'HeroHome',
  components: {
    Modal,
  },
  data: function () {
    return {
      videoModalOpen: false,
      list: [],
      mainText: '느리지도 급하지도 않게',
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      await axios
        .get(
          `https://sheets.googleapis.com/v4/spreadsheets/1DKyGC_unb6zzKLhyU-WogO1qC9Y1j-wn1hwqdls5fRw/values/sheet?key=AIzaSyA_Mt2lgk76CtG-tTrBjePTKnrJwwqmcw8`
        )
        .then((res) => {
          const result = res.data.values;
          let list = [];
          result.forEach((item) => {
            list = list.concat(item);
          });
          const day = moment().format('DD');
          this.mainText = list[Number(day)];
        });
    },
  },
};
</script>
