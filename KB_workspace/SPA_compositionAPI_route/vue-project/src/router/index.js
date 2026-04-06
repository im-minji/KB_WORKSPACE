//라우팅테이블을 등록
import { createRouter, createWebHistory } from 'vue-router';
import Product from '@/pages/Product.vue';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import ProductInfo from '@/pages/ProductInfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //히스토리 조작을 해도 서버에 요청안함.
  routes: [
    { path: '/', component: Home },
    // { path: '/product', component: Product },

    // 명명된 라우트
    // { name: 'Product', path: '/product', component: Product },
    //중첩라우트
    {
      name: 'Product',
      path: '/product',
      component: Product,
      children: [
        {
          name: 'ProductInfo',
          path: ':prodNo', // 부모 경로(/product)가 이미 있으므로 :prodNo만 적어도 됩니다.
          component: ProductInfo,
        },
      ],
    },

    { path: '/:path(.*)*', component: NotFound },
  ],
});

/*
동적 파라메터 /:파라메터이름
/:paths
정규표현식 (.*) 모든 문자
          * 여러단계의 경로를 허용한다
NotFound 라우트는 라우터들 중 맨마지막에 와야함 

*/
export default router;
