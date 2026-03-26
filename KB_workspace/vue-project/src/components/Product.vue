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
        @productDetail="deatilViewMethod"
      ></ProductItem>
    </tbody>
  </table>
  <br />
  <ProductInfo :product="selectedProduct" v-if="selectedProduct"></ProductInfo>
</template>
<script>
//TODO 1.
import ProductItem from './ProductItem.vue';
import Search from './Search.vue';
import ProductInfo from './ProductInfo.vue';

export default {
  //TODO 2.
  name: 'Product',
  // ⭐️ 중요: 컴포넌트 등록이 필요합니다!
  components: {
    ProductInfo,
    ProductItem,
    Search,
  },
  async mounted() {
    this.product = await this.requestProduct();
  },
  data() {
    return {
      product: [],
      selectedProduct: [],
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

    deatilViewMethod(prodNo) {
      // 1. URL (백틱 사용)
      const url = `http://localhost:3000/product/${prodNo}`;

      // 2. 서버에서 받은 데이터를 selectedProduct에 할당
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // 이 부분이 중요해요! 가져온 데이터를 변수에 저장합니다.
          this.selectedProduct = data;
          console.log('상세정보 저장됨:', this.selectedProduct);
        })
        .catch((error) => console.error('에러 발생:', error));
    },
  },
};
</script>

<!-- <style>
.productItem:hover {
  background-color: green;
  color: white;
}
</style> -->
