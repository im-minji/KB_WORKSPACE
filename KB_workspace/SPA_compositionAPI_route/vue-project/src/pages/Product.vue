<template>
  <Search @searchProductEvent="childEventHandler" />
  <router-view :key="currentRoute.params.prodNo"></router-view>
  <table class="table table-hover w-50">
    <thead>
      <tr>
        <th>이미지</th>
        <th>상품번호</th>
        <th>상품명</th>
        <th>상품가격</th>
      </tr>
    </thead>
    <tbody>
      <!-- <ProductItem
        v-for="p in state.product"
        :key="p.prodNo"
        v-bind:childProduct="p"
        @click="clickProductHandler"
      ></ProductItem> -->
      <ProductItem
        v-for="p in state.product"
        :key="p.prodNo"
        :childProduct="p"
        @click="clickProductHandler(p.prodNo)"
      ></ProductItem>
    </tbody>
  </table>
  <div class="container-fluid">
    <ul class="pagination">
      <li class="page-item">
        <span class="page-link">PREV</span>
      </li>
      <li class="page-item active">
        <span class="page-link">4</span>
      </li>
      <li class="page-item"><span class="page-link">5</span></li>
      <li class="page-item"><span class="page-link">6</span></li>
      <li class="page-item"><span class="page-link">NEXT</span></li>
    </ul>
  </div>
</template>
<!-- Composition API로 변환시켜보세요
 1. Product.vue
 2. ProductItem.vue
 3. Search.vue
 -->
<script setup>
import ProductItem from '@/pages/ProductItem.vue';
import Search from '@/pages/Search.vue';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute(); // 보통 관례상 route라는 이름을 많이 씁니다.
// 만약 템플릿에서 currentRoute를 쓰고 싶다면 아래처럼 정의
const currentRoute = route;

const router = useRouter();
const state = reactive({ product: [] });

/**
 * 백엔드서버에게 상품목록을 요청한다
 */
const requestProduct = () => {
  const url = 'http://localhost:3000/product';
  // return fetch(url).then((response) => {
  //   return response.json();
  // });
  return axios.get(url);
};
const childEventHandler = (eventValue) => {
  alert(eventValue);
};

const clickProductHandler = (prodNo) => {
  router.push(`/product/${prodNo}`);
  // router.push({name:'ProductInfo', params:{prodNo}});
};

onMounted(async () => {
  // const res = await requestProduct();
  // console.log(res);

  state.product = (await requestProduct()).data;
  // state.product = await requestProduct();
  // console.log(state.product);
});
</script>
