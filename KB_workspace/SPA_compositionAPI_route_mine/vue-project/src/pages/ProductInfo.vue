<template>
  <!-- gap-4 : 내부 요소들 사이의 간격(gap)
   gap-0	0
gap-1	0.25rem (4px)
gap-2	0.5rem (8px)
gap-3	1rem (16px)
gap-4	1.5rem (24px) -->
  <div class="productinfo d-flex gap-4 p-3">
    <!-- 왼쪽 이미지 영역 (30%) -->
    <div
      class="productinfo__img d-flex justify-content-center align-items-center"
    >
      <!-- img-fluid: max-width: 100%;height: auto;와 같음-->
      <img
        :src="`http://localhost:3000/static/${state.item.prodNo}.jpg`"
        :alt="`${state.item.prodName} 상품 이미지`"
        class="img-fluid"
        style="max-width: 100%"
      />
    </div>
    <!-- 오른쪽 정보 영역 (70%) -->
    <div class="productinfo__info d-flex flex-column flex-grow-1">
      <ul class="list-group w-100">
        <!-- 상품번호 -->
        <li class="list-group-item d-flex align-items-center prodNo">
          <span class="flex-shrink-0" style="flex-basis: 120px"
            ><i class="bi bi-hash me-2"></i>상품번호</span
          >
          <span class="text-nowrap flex-grow-1">{{ state.item.prodNo }}</span>
        </li>

        <!-- 상품명 -->
        <li class="list-group-item d-flex align-items-center prodName">
          <span class="flex-shrink-0" style="flex-basis: 120px"
            ><i class="bi bi-tag me-2"></i>상품명</span
          >
          <span class="text-nowrap flex-grow-1">{{ state.item.prodName }}</span>
        </li>

        <!-- 상품가격 -->
        <li class="list-group-item d-flex align-items-center">
          <span class="flex-shrink-0" style="flex-basis: 120px">
            <i class="bi bi-currency-won me-2"></i>상품가격
          </span>
          <span class="text-nowrap flex-grow-1"
            >{{ state.item.prodPrice }}원</span
          >
        </li>
        <li class="list-group-item d-flex align-items-center prodPrice">
          <span class="flex-shrink-0" style="flex-basis: 120px"
            ><i class="bi bi-currency-won me-2"></i>상세정보</span
          >
          <span class="flex-grow-1"
            >바삭한 카다이프 토핑과 부드러운 그린 피스타치오 폼이 조화로운
            콜드브루 음료 스타벅스 시그니처 바닐라 크림 콜드 브루 스타일로
            깔끔한 풍미와 함께 즐겨보세요 *취향에 따라 카다이프 토핑 많이
            커스텀으로 바삭한 식감을 더 즐길 수 있습니다. 알레르기 유발요인 :
            땅콩 / 대두 / 우유 / 밀</span
          >
        </li>
        <!-- 수량 -->

        <li class="list-group-item d-flex align-items-center quantity">
          <span class="flex-shrink-0" style="flex-basis: 120px"
            ><i class="bi bi-basket3 me-2"></i>수량</span
          >
          <input type="number" v-model="quantity" min="1" max="99" value="1" />
        </li>

        <!-- 장바구니 버튼 -->
        <li class="list-group-item">
          <button @click="clickAddCart" class="btn btn-success w-100">
            <i class="bi bi-cart-plus-fill me-2"></i>장바구니 담기
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- <script>
export default {
  name: 'ProductInfo',
  async mounted() {
    const url = `http://localhost:3000/product/${this.prodNo}`;
    const method = 'get';
    this.item = await fetch(url).then((response) => {
      return response.json();
    });
  },
  data() {
    return {
      prodNo: 'C0002',
      item: {},
      quantity : 0,
    };
  },
};
</script> -->

<script setup>
import { ref, reactive, onMounted } from 'vue';
const prodNo = 'C0002';
const state = reactive({ item: {} });
const item1 = reactive({});
const quantity = ref(0);
onMounted(async () => {
  const url = `http://localhost:3000/product/${prodNo}`;
  const method = 'get';
  state.item = await fetch(url).then((response) => {
    console.log(response.json);
    return response.json();
  });
});
</script>
<style scoped>
.productinfo {
  background-color: rgb(191, 255, 127);
}
.productinfo__img {
  background-color: aquamarine;
  flex: 3;
  min-width: 150px;
}
</style>
