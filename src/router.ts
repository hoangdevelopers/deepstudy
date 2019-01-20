import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Navigation from './views/Navigation.vue';
import Lesson from './views/Lesson.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/samples',
      name: 'samples',
      component: Navigation,
    },
    {
      path: '/lesson/:lessId',
      name: 'lesson',
      component: Lesson,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
