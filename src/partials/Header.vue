<template>
  <header class="absolute z-30 w-full">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Site branding -->
        <div class="mr-4 shrink-0">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <!-- <svg
              class="w-8 h-8 text-purple-600 fill-current"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"
              />
            </svg> -->
            <img src="../images/yp/logo.png" class="w-[70px] mt-8 ml-4" alt="" />
            <span class="text-sm font-bold font-inter">YOGA PROJECT</span>
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Desktop menu links -->
          <ul class="flex flex-wrap items-center justify-end grow">
            <!-- <li>
              <router-link
                to="/about"
                class="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >About</router-link
              >
            </li> -->
            <!-- <li>
              <router-link
                to="/pricing"
                class="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >수업시간표</router-link
              >
            </li> -->
            <!-- <li>
              <router-link
                to="/features"
                class="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >수업 신청하기</router-link
              >
            </li> -->
            <!-- <li>
              <router-link
                to="/blog"
                class="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >Blog</router-link
              >
            </li> -->
            <!-- 1st level: hover -->
            <!-- <Dropdown title="도움">
              <li>
                <router-link
                  to="/contact"
                  class="flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600"
                  >Contact us</router-link
                >
              </li>
              <li>
                <router-link
                  to="/help"
                  class="flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600"
                  >FAQ</router-link
                >
              </li>
            </Dropdown> -->
          </ul>

          <!-- Desktop sign in links -->
          <ul
            v-if="isShowUser && username === ''"
            class="flex flex-wrap items-center justify-end grow"
          >
            <li>
              <router-link
                to="/signin"
                class="flex items-center px-4 py-3 text-purple-600 transition duration-150 ease-in-out font-bolder hover:text-gray-200"
                >로그인</router-link
              >
            </li>
            <li>
              <router-link
                to="/signup"
                class="ml-3 text-white bg-purple-600 font-bolder btn-sm hover:bg-purple-700"
                >회원가입</router-link
              >
            </li>
          </ul>
          <ul
            v-else-if="isShowUser && username !== ''"
            class="flex flex-wrap items-center justify-end grow"
          >
            <li>
              <span
                to="/profile"
                class="flex items-center px-4 py-3 font-bold transition duration-150 ease-in-out text-white-600 hover:text-gray-200"
                >환영해요, {{ username }}님</span
              >
            </li>
            <li v-if="isLoggedIn">
              <button
                class="ml-3 text-white bg-blue-600 rounded-md font-bolder btn-sm hover:bg-blue-700"
                @click="$router.push({ path: '/profile' })"
              >
                정보수정
              </button>
              <button
                class="ml-3 text-white bg-blue-600 rounded-md font-bolder btn-sm hover:bg-blue-700"
                @click="logout"
              >
                로그아웃
              </button>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div class="md:hidden">
          <!-- Hamburger button -->
          <button
            ref="hamburger"
            class="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-6 h-6 text-gray-300 transition duration-150 ease-in-out fill-current hover:text-gray-200"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav
            id="mobile-nav"
            ref="mobileNav"
            class="absolute left-0 z-20 w-full px-4 overflow-hidden transition-all duration-300 ease-in-out top-full sm:px-6"
            :style="[
              mobileNavOpen
                ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 }
                : { maxHeight: 0, opacity: 0.8 },
            ]"
          >
            <ul class="px-4 py-2 bg-gray-800">
              <!-- <li>
                <router-link
                  to="/features"
                  class="flex py-2 text-gray-300 hover:text-gray-200"
                  >Features</router-link
                >
              </li>
              <li>
                <router-link
                  to="/pricing"
                  class="flex py-2 text-gray-300 hover:text-gray-200"
                  >Pricing</router-link
                >
              </li>
              <li>
                <router-link
                  to="/blog"
                  class="flex py-2 text-gray-300 hover:text-gray-200"
                  >Blog</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="flex py-2 text-gray-300 hover:text-gray-200"
                  >About us</router-link
                >
              </li>
              <li class="py-2 my-2 border-t border-b border-gray-700">
                <span class="flex py-2 text-gray-300">Support</span>
                <ul class="pl-4">
                  <li>
                    <router-link
                      to="/contact"
                      class="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                      >Contact us</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/help"
                      class="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                      >Help center</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/404"
                      class="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                      >404</router-link
                    >
                  </li>
                </ul>
              </li> -->
              <template v-if="!isLoggedIn">
                <li>
                  <router-link
                    to="/signin"
                    class="flex justify-center w-full py-2 font-medium text-blue-600 hover:text-gray-200"
                    >로그인</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/signup"
                    class="inline-flex items-center justify-center w-full px-4 py-2 my-2 font-medium text-white transition duration-150 ease-in-out bg-purple-600 border border-transparent rounded-sm hover:bg-purple-700"
                    >회원가입</router-link
                  >
                </li>
              </template>
              <template v-if="isLoggedIn">
                <li>
                  <span
                    class="flex justify-center w-full py-2 font-bold text-white-600 hover:text-gray-200"
                    >환영해요, {{ username }}님</span
                  >
                </li>
                <li>
                  <button
                    class="inline-flex items-center justify-center w-full px-4 py-2 my-2 font-medium text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                    @click="$router.push({ path: '/profile' })"
                  >
                    정보수정
                  </button>
                </li>
                <li>
                  <button
                    class="inline-flex items-center justify-center w-full px-4 py-2 my-2 font-medium text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                    @click="logout"
                  >
                    로그아웃
                  </button>
                </li>
              </template>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from './../utils/Dropdown.vue';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'Header',
  components: {
    Dropdown,
  },
  props: {
    isShowUser: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      mobileNavOpen: false,
      username: '',
      isLoggedIn: false,
    };
  },
  computed: {
    displayName() {
      return this.username;
    },
  },
  created() {},
  mounted() {
    const auth = getAuth();

    document.addEventListener('click', this.clickOutside);
    document.addEventListener('keydown', this.keyPress);
    // this.getUserInfo();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        this.isLoggedIn = true;
        // const currentUser = auth.currentUser;
        this.username = user?.displayName;
      } else {
        // User is signed out
        this.isLoggedIn = false;
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickOutside);
    document.removeEventListener('keydown', this.keyPress);
  },
  methods: {
    async logout() {
      const auth = getAuth();
      await signOut(auth).then(() => {
        this.$router.push({ path: '/signin' });
      });
    },
    getUserInfo() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        this.username = user.displayName;
        // const email = user.email;
        // const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        // const uid = user.uid;
      }
    },
    clickOutside(e) {
      if (
        !this.mobileNavOpen ||
        this.$refs.mobileNav.contains(e.target) ||
        this.$refs.hamburger.contains(e.target)
      )
        return;
      this.mobileNavOpen = false;
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return;
      this.mobileNavOpen = false;
    },
  },
};
</script>
