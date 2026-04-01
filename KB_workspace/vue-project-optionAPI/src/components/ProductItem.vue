<template>
  <tr @click="$emit('productDetail', childProduct.prodNo)">
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
  // methods: {
  //   productDetail(prodNo) {
  //     this.$emit('productDetail', prodNo);
  //   }
  // }
};
</script>

<style scoped>
/* tr(행) 전체에 hover 스타일을 적용합니다 */
tr:hover {
  background-color: green;
  cursor: pointer; /* 마우스를 올렸을 때 포인터 모양으로 변경 (선택사항) */
}

/* 행 전체의 글자색도 바꾸고 싶다면 아래와 같이 추가할 수 있습니다 */
tr:hover td {
  color: white;
}
</style>
