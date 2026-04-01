<script setup>
import { ref, onMounted } from 'vue';
import Product from './components/Product.vue';
import ProductInfo from './components/ProductInfo.vue';
import logo from './assets/images/starbucks_logo.png';
// 부트스트랩 JS 모듈에서 Modal을 가져와야 함 (모달 직접 제어를 위해)
import * as bootstrap from 'bootstrap';

const logoImg = ref(logo);
const selectedProduct = ref(null);
const modalInstance = ref(null);

// 상세 정보 가져오기 핸들러
const openDetailModal = async (prodNo) => {
  const url = `http://localhost:3000/product/${prodNo}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    selectedProduct.value = data;

    // 상세 정보를 성공적으로 가져왔다면 모달창 띄우기
    if (modalInstance.value) {
      modalInstance.value.show();
    }
  } catch (error) {
    console.error('상세정보 조회 실패:', error);
  }
};

onMounted(() => {
  // 컴포넌트 마운트 시 모달 인스턴스 초기화
  const modalElement = document.getElementById('productDetailModal');
  if (modalElement) {
    modalInstance.value = new bootstrap.Modal(modalElement);
  }
});
</script>

<template>
  <h1>App.vue (Composition API - Modal Ver.)</h1>
  <header class="container-fluid sticky-top">
    <nav
      class="navbar navbar-expand-sm bg-white navbar-light align-items-center"
    >
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img :src="logoImg" alt="로고" height="63" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="collapsibleNavbar"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link px-3 text-nowrap" href="#">
              <i class="fa-solid fa-lock-open"></i>로그인</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link px-3 text-nowrap" href="#"
              ><i class="fa-solid fa-user-plus"></i>가입</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link px-3 text-nowrap" href="#"
              ><i class="fa-solid fa-mug-saucer"></i>상품</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link px-3 text-nowrap" href="#"
              ><i class="fa-solid fa-cart-shopping"></i>장바구니</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link px-3 text-nowrap" href="#"
              ><i class="fa-solid fa-list"></i>주문</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="main-container">
    <section class="main-container__content overflow-auto">
      <h2>본문 내용</h2>
      <!-- Product에서 올라오는 상세 요청 이벤트를 openDetailModal에서 처리 -->
      <Product @productDetail="openDetailModal"></Product>
      <br />
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#">6</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </section>

    <aside class="main-container__sidebar shrink-0">
      <h3>사이드바 (20%)</h3>
    </aside>
  </main>

  <!-- 상세 정보 모달 (Modal) -->
  <div
    class="modal fade"
    id="productDetailModal"
    tabindex="-1"
    aria-labelledby="modalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">상품 상세 정보</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0">
          <!-- 선택된 상품이 있을 때만 렌더링 -->
          <ProductInfo
            :product="selectedProduct"
            v-if="selectedProduct"
          ></ProductInfo>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer">
    <p>
      사업자등록번호 : 201-81-21515 주식회사 에스씨케이컴퍼니 대표이사 : 손정현
      TEL : 1522-3232 개인정보 보호책임자 : 이찬우 ⓒ 2026 Starbucks Coffee
      Company. All Rights Reserved
    </p>
  </footer>
</template>

<style>
/*
      BEM 구조 
      */
* {
  box-sizing: border-box;
}
/* 전체 레이아웃 구성을 위한 설정 */
/* body */
#app {
  margin: 0;
  display: flex;
  flex-direction: column; /* 세로배치 */
  height: 100vh; /* 화면 전체 높이 사용 */
}

/* 마우스 호버 시 색상 반전 */
/* .header__menu-link:hover { */
.nav-link:hover {
  background-color: #333; /* 배경 검정 (또는 포인트 컬러) */
  color: #fff; /* 글자 흰색 */
  border-radius: 0.375rem;
}

/* 2. 메인 컨테이너 (section + aside) */
.main-container {
  background-color: red;

  width: 100%;
  display: flex;
  flex: 1; /* 헤더와 푸터를 제외한 나머지 공간 모두 차지 */
  overflow: hidden; /* 자식인 section에서만 스크롤이 발생하도록 제한 */
}
/* 2-1. section 본문 (자동 스크롤) */
.main-container__content {
  /*flex: 1;*/ /* aside(20%)를 제외한 나머지 80% 차지 */
  flex: 4;
  overflow-y: auto; /* 내용이 많으면 자동으로 세로 스크롤 생성 */
  padding: 0px;
  background-color: #f9f9f9;
}

/* 2-2. aside 사이드바 (오른쪽 20%) */
.main-container__sidebar {
  /* width: 20%; */ /*20% 너비 고정 */
  flex: 1;
  padding: 0px;
  margin: 0px;
  background-color: #eee;
  border-left: 1px solid #ddd;
}

/* 3. 푸터 (최대 높이 50px) */
.footer {
  max-height: 50px;
  /*height: 100%;*/ /* 내용에 따라 늘어나되 50px까지만 */
  padding: 0 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
}
</style>
