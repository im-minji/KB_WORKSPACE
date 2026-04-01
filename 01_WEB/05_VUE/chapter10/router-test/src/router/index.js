import { createRouter, createWebHistory } from 'vue-router';

import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    { path: '/videos', component: Videos },
  ],
});

export default router;
