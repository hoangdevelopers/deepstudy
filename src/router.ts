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
      path: '/navigation',
      name: 'navigation',
      component: Navigation,
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: Lesson,
    },
  ],
});
