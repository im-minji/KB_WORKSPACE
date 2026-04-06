<template>
  <Search @searchProductEvent="childEventHandler" />

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
      <ProductItem
        v-for="p in state.product"
        :key="p.prodNo"
        v-bind:childProduct="p"
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
import ProductItem from '@/components/ProductItem.vue';
import Search from '@/components/Search.vue';
import { ref, reactive, onMounted } from 'vue';
const state = reactive({ product: [] });

/**
 * 백엔드서버에게 상품목록을 요청한다
 */
const requestProduct = () => {
  const url = 'http://localhost:3000/product';
  return fetch(url).then((response) => {
    return response.json();
  });
};
const childEventHandler = (eventValue) => {
  alert(eventValue);
};
onMounted(async () => {
  state.product = await requestProduct();
  console.log(state.product);
});
</script>
