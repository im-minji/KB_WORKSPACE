// 라우팅 테이블을 등록
import { createRouter, createWebHistory } from 'vue-router';
import Product from '@/pages/Product.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //히스토리 조작을 해도 서버에 요청안함.
  routes: [
    { path: '/', redirect: '/product' },
    { path: '/product', component: Product },
  ],
});

export default router;
