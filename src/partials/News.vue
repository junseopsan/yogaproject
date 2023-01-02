<template>
  <section id="story">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="py-12 border-t border-gray-800 md:py-20">
        <!-- Section header -->
        <div v-if="postId === '99'" class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <h2 class="h2" data-aos="fade-up">요프 이야기</h2>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
            <!-- 1st article -->
            <article
              v-for="(item, key) in realList"
              :key="key"
              class="flex flex-col h-full"
              data-aos="fade-up"
            >
              <header>
                <router-link :to="`/blog-post?postId=${item.id}`" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      :src="item.imgUrl"
                      width="352"
                      height="198"
                      alt="News 01"
                    />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap -m-1 text-xs font-medium">
                    <template v-if="item.tags">
                      <li
                        v-for="(item, key) in item.tags.split(',')"
                        :key="key"
                        class="m-1"
                      >
                        <a
                          class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out rounded-full"
                          :class="{
                            'bg-purple-600 hover:bg-purple-700': key % 2 === 0,
                            'bg-pink-600 hover:bg-pink-700': key % 2 !== 0,
                          }"
                          >{{ item }}</a
                        >
                      </li>
                    </template>
                  </ul>
                </div>
                <h3 class="mb-2 h4">
                  <router-link
                    to="/blog-post"
                    class="transition duration-150 ease-in-out hover:text-gray-100"
                    >{{ item.title }}</router-link
                  >
                </h3>
              </header>
              <footer class="flex items-center mt-4">
                <div class="font-medium">
                  <a
                    class="text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                    href="#0"
                    >G1</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">{{ item.date }}</span>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'News',
  props: {
    postId: {
      type: String,
      default: '99',
    },
  },
  data() {
    return {
      isSecond: false,
      list: [],
      imgListNumber: [],
      realList: [],
      newPostId: '99',
    };
  },
  watch: {
    postId(newVal) {
      this.newPostId = newVal;
      this.realList = [];
      if (this.isSecond) this.init();
    },
  },
  mounted() {
    this.getPostList();
    setTimeout(() => {
      const list = this.imgListNumber;
      list.forEach((item) => {
        this.getPostDetail(item.id);
      });
    }, 1200);
  },
  methods: {
    init() {
      this.getPostList();
      setTimeout(() => {
        const list = this.imgListNumber;
        list.forEach((item) => {
          this.getPostDetail(item.id);
        });
      }, 1200);
    },
    async getPostList() {
      await axios
        .get(
          `https://www.tistory.com/apis/post/list?access_token=4a800f44d3188bbc97ea4a98c1973aee_58968bdc78514a905a01f688fa4ac4e0&output=json&blogName=junseopsan&page=1`
        )
        .then((res) => {
          const result = res;
          if (result) {
            const list = result.data.tistory.item.posts;
            this.list = list.reverse();
            this.imgListNumber = list.map((item) => {
              return { id: item.id };
            });
          }
        });
    },
    getPostDetail(id) {
      axios
        .get(
          `https://www.tistory.com/apis/post/read?access_token=4a800f44d3188bbc97ea4a98c1973aee_58968bdc78514a905a01f688fa4ac4e0&output=json&blogName=junseopsan&postId=${id}`
        )
        .then((res) => {
          const result = res;
          const item = result.data.tistory.item;
          const start = item.content.indexOf('https');
          const end = item.content.indexOf('/img');
          const url = item.content.substring(start, end + 8);

          if (this.newPostId !== item.id) {
            this.realList.push({
              ...item,
              imgUrl: url,
              tags: item.tags.tag ? item.tags.tag.join() : null,
            });
          }

          this.realList = this.realList
            .sort((prev, cur) => {
              if (prev.id < cur.id) return 1;
              if (prev.id > cur.id) return -1;
            })
            .slice(0, 3);

          this.isSecond = true;
        });
    },
  },
};
</script>
