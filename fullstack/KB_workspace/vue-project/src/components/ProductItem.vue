<template>
  <tr>
    <td>이미지자리</td>
    <td>{{ childProduct.prodNo }}</td>
    <td>{{ childProduct.prodName }}</td>
    <td>{{ childProduct.prodPrice }}</td>
  </tr>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    childProduct: {
      type: Object,
      required: true,
    },
  },
};
</script>
