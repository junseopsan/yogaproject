import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Features from './pages/Features.vue';
import Pricing from './pages/Pricing.vue';
import Blog from './pages/Blog.vue';
import BlogPost from './pages/BlogPost.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Help from './pages/Help.vue';
import SignIn from './pages/SignIn.vue';
import SignUp from './pages/SignUp.vue';
import Profile from './pages/Profile.vue';
import ResetPassword from './pages/ResetPassword.vue';
import ChangePassword from './pages/ChangePassword.vue';
import PageNotFound from './pages/PageNotFound.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routerHistory = createWebHistory();

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 });
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto';
      window.scroll({ top: 0 });
      document.querySelector('html').style.scrollBehavior = '';
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/signin',
      component: SignIn,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/signup',
      component: SignUp,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/resetPassword',
      component: ResetPassword,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/changePassword',
      component: ChangePassword,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/features',
      component: Features,
    },
    {
      path: '/pricing',
      component: Pricing,
    },
    {
      path: '/blog',
      component: Blog,
    },
    {
      path: '/blog-post',
      component: BlogPost,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/help',
      component: Help,
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound,
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert('로그인이 필요합니다.');
      next('/');
    }
  } else {
    next();
  }
});

export default router;
