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
    <!-- <tr v-for="p in product">
      <td></td>
      <td>{{ p.prodNo }}</td>
      <td>{{ p.prodName }}</td>
      <td>{{ p.prodPrice }}</td>
    </tr> -->
    <!-- TODO 3. 위의 tr태그와 똑같은 효과가 나도록 하위컴포넌트, ProductItem을 완성하세요-->
    <tbody>
      <ProductItem
        v-for="p in product"
        :key="p.prodNo"
        v-bind:childProduct="p"
      ></ProductItem>
    </tbody>
  </table>
</template>
<script>
//TODO 1.
import ProductItem from './ProductItem.vue';
import Search from './Search.vue';

export default {
  //TODO 2.
  name: 'Product',
  // ⭐️ 중요: 컴포넌트 등록이 필요합니다!
  components: {
    ProductItem,
    Search,
  },
  async mounted() {
    this.product = await this.requestProduct();
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    /**
     * 백엔드서버에게 상품목록을 요청한다
     */
    requestProduct() {
      const url = 'http://localhost:3000/product';
      return fetch(url).then((response) => {
        return response.json();
      });
    },

    searchHandler(product) {
      alert(product);
    },
  },
};
</script>
