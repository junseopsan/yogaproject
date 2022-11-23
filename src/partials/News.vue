<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="py-12 border-t border-gray-800 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <h2 class="h2" data-aos="fade-up">요가프로젝트 이야기</h2>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
            <!-- 1st article -->
            <article
              v-for="(item, key) in list"
              :key="key"
              class="flex flex-col h-full"
              data-aos="fade-up"
            >
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 overflow-hidden rounded-sm pb-9/16">
                    <img
                      class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                      src="../images/yp/ypblog1.jpeg"
                      width="352"
                      height="198"
                      alt="News 01"
                    />
                  </figure>
                </router-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap -m-1 text-xs font-medium">
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-purple-600 rounded-full hover:bg-purple-700"
                        href="#0"
                        >요프</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="inline-flex px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out bg-pink-500 rounded-full hover:bg-pink-600"
                        href="#0"
                        >룰루레몬</a
                      >
                    </li>
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
  data() {
    return {
      token: '',
      list: [],
      imgList: [],
    };
  },
  computed: {
    getlist() {
      // this.list.forEach((item) => {});

      return false;
    },
  },
  mounted() {
    this.getPostList();
    // this.getPostDetail(item.id);
  },
  methods: {
    async getPostList() {
      // https://www.tistory.com/apis/post/list?
      //   access_token={access-token}
      //   &output={output-type}
      //   &blogName={blog-name}
      //   &page={page-number}
      await axios
        .get(
          `https://www.tistory.com/apis/post/list?access_token=4a800f44d3188bbc97ea4a98c1973aee_58968bdc78514a905a01f688fa4ac4e0&output=json&blogName=junseopsan&page=1`
        )
        .then((res) => {
          const result = res;
          if (result) {
            this.list = result.data.tistory.item.posts;
            console.log(result.data.tistory.item.posts);
          }
        });
    },
    getPostDetail(id) {
      // https://www.tistory.com/apis/post/list?
      //   access_token={access-token}
      //   &output={output-type}
      //   &blogName={blog-name}
      //   &page={page-number}
      let url = '';
      axios
        .get(
          `https://www.tistory.com/apis/post/read?access_token=4a800f44d3188bbc97ea4a98c1973aee_58968bdc78514a905a01f688fa4ac4e0&output=json&blogName=junseopsan&postId=${id}`
        )
        .then((res) => {
          const result = res;
          const item = result.data.tistory.item;
          const start = item.content.indexOf('https');
          const end = item.content.indexOf('/img.png');
          url = item.content.substring(start, end);
          console.log(url);
          this.imgList.push(url);
          // debugger;
        });
    },
    async getToken() {
      // https://www.tistory.com/oauth/access_token?client_id=c5b6a13d3ec47902bd01c891cb4425e2&client_secret=c5b6a13d3ec47902bd01c891cb4425e2c8e72fccc201f348d6c0dcd3283d9b34243ad1eb&redirect_uri=https://www.yogaproject.kr&code=18957167d825ccae37a6f48a03b61b498d6a10680d92cce2fa20eecda6e871e6b02d3960&grant_type=authorization_code
      // 4a800f44d3188bbc97ea4a98c1973aee_58968bdc78514a905a01f688fa4ac4e0

      await axios
        .get(
          `https://www.tistory.com/oauth/access_token?client_id=c5b6a13d3ec47902bd01c891cb4425e2&client_secret=c5b6a13d3ec47902bd01c891cb4425e2c8e72fccc201f348d6c0dcd3283d9b34243ad1eb&redirect_uri=https://www.yogaproject.kr&code=18957167d825ccae37a6f48a03b61b498d6a10680d92cce2fa20eecda6e871e6b02d3960&grant_type=authorization_code`
        )
        .then((res) => {
          const result = res;
          console.log(result);
        });
    },
  },
};
</script>
