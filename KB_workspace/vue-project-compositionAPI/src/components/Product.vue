<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import ProductItem from './ProductItem.vue';
import Search from './Search.vue';

const product = ref([]);
const emit = defineEmits(['productDetail']);

const requestProduct = async () => {
  const url = 'http://localhost:3000/product';
  const response = await fetch(url);
  return await response.json();
};

onMounted(async () => {
  product.value = await requestProduct();
});

const searchHandler = (msg) => {
  alert(msg);
};

// 하위 컴포넌트(ProductItem)에서 올라온 이벤트를 다시 부모(App.vue)로 전달
const detailViewHandler = (prodNo) => {
  emit('productDetail', prodNo);
};
</script>

<template>
  <Search @searchProductEvent="searchHandler"></Search>
  <table>
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
        v-for="p in product"
        :key="p.prodNo"
        :childProduct="p"
        @productDetail="detailViewHandler"
      ></ProductItem>
    </tbody>
  </table>
</template>

<!-- <style>
.productItem:hover {
  background-color: green;
  color: white;
}
</style> -->
