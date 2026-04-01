<template>
  <div class="productinfo d-flex flex-column flex-md-row gap-4 p-4" v-if="product">
    <!-- 이미지 영역 -->
    <div
      class="productinfo__img d-flex justify-content-center align-items-center rounded bg-light border"
    >
      <img
        :src="`http://localhost:3000/static/${product.img}`"
        :alt="`${product.prodName} 상품 이미지`"
        class="img-fluid"
        style="max-height: 300px; object-fit: contain;"
      />
    </div>

    <!-- 정보 영역 -->
    <div class="productinfo__info d-flex flex-column flex-grow-1">
      <h3 class="mb-3 fw-bold text-success">{{ product.prodName }}</h3>
      <ul class="list-group list-group-flush w-100 mb-4">
        <li class="list-group-item d-flex px-0">
          <span class="fw-bold text-secondary" style="width: 100px">상품번호</span>
          <span>{{ product.prodNo }}</span>
        </li>
        <li class="list-group-item d-flex px-0">
          <span class="fw-bold text-secondary" style="width: 100px">상품가격</span>
          <span class="text-danger fw-bold">{{ product.prodPrice.toLocaleString() }}원</span>
        </li>
        <li class="list-group-item px-0 mt-2">
          <p class="text-muted small mb-0">
            바삭한 카다이프 토핑과 부드러운 그린 피스타치오 폼이 조화로운 콜드브루 음료입니다. 
            깔끔한 풍미와 함께 스타벅스만의 특별한 맛을 즐겨보세요.
          </p>
        </li>
      </ul>

      <!-- 수량 및 장바구니 -->
      <div class="d-flex align-items-center gap-3 mt-auto">
        <div class="input-group" style="width: 140px">
          <span class="input-group-text bg-white">수량</span>
          <input type="number" class="form-control" v-model="quantity" min="1" max="99" />
        </div>
        <button @click="addToCart" class="btn btn-success flex-grow-1 py-2 fw-bold">
          <i class="bi bi-cart-plus-fill me-2"></i>장바구니 담기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const quantity = ref(1);

// 상품이 바뀔 때마다 수량을 1로 초기화
watch(() => props.product, () => {
  quantity.value = 1;
});

const addToCart = () => {
  const url = 'http://localhost:3000/cart';
  const cartData = {
    prodNo: props.product.prodNo,
    quantity: quantity.value,
  };

  // 백엔드(backend/index.js)에 /cart API가 있는지 확인 필요
  // 현재 backend/index.js에는 없으므로 실제 요청 시 에러가 날 수 있음
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartData),
  })
    .then((res) => {
      if(res.ok) return res.text();
      throw new Error('장바구니 담기 실패');
    })
    .then((result) => {
      alert(result || '장바구니에 담겼습니다.');
    })
    .catch((error) => {
      console.error('Error adding to cart:', error);
      alert('장바구니 요청 중 오류가 발생했습니다. (백엔드 API 확인 필요)');
    });
};
</script>

<style scoped>
.productinfo {
  min-height: 400px;
}
.productinfo__img {
  flex: 1;
  min-width: 250px;
  padding: 20px;
}
.productinfo__info {
  flex: 1.5;
}
</style>
