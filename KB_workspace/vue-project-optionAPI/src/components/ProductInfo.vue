<!-- 이미지 -->
<!-- 상품 번호: C0002 -->
<!-- 상품명: 아이스 아메리카노 -->
<!-- 가격: 1500 -->

<!-- 
상품 행을 클릭하면  
 백엔드 서                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                버에 /product/상품번호로 값 요청 
 응답받아오기 (응답 예: {prodNo: "C00002" prodName:"아이스아메리카노" prodPrice: 1500})
 응답 내용을 템플릿의 각 영역에 보여주기 
상세정보는 모든 음료에 고정해두기 
수량을 입력해 장바구니 담기를 클릭했을 때 
백엔드 서버에 수량을 전송 ex) url: '/cart' method: post content-type: json 전송내용 {"prodNo": 'C0002' quantity: 1}

 -->

<!-- 상세정보:  -->
<!-- 수량:  -->
<!-- 장바구니 (담기버튼) -->

<template>
  <div v-if="product && product.prodNo">
    <hr />
    <h2>{{ product.prodName }} 상세정보</h2>
    <div class="productImage">{{ product.img }}</div>
    <div>상품번호: {{ product.prodNo }}</div>

    <div>상세설명: 이것은 아주 맛있습니다.</div>
    <span>수량 : </span>
    <input type="number" v-model="quantity" />
    <button @click="addToCart">장바구니</button>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  data() {
    return {
      quantity: 1,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      // 3. 이제 여기서 fetch를 사용해 서버로 데이터를 보냅니다!
      const url = 'http://localhost:3000/cart';
      const cartData = {
        prodNo: this.product.prodNo, // props에서 가져온 상품번호
        quantity: this.quantity, // data에서 가져온 입력 수량
      };

      console.log('서버로 보낼 데이터:', cartData);

      // fetch의 POST 방식 작성법
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
      })
        .then((res) => res.text()) // 서버에서 res.send로 문자열을 보낼 예정이므로 .text()
        .then((result) => {
          alert(result); // "장바구니 담기 성공" 메시지 출력
        });
    },
  },
};
</script>

<!-- <template>
  <tr>
    <td>이미지자리</td>
    <td>{{ childProduct.prodNo }}</td>
    <td>{{ childProduct.prodName }}</td>
    <td>{{ childProduct.prodPrice }}</td>
  </tr>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    childProduct: {
      type: Object,
      required: true,
    },
  },
};
</script> -->
