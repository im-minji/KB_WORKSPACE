<template>
  <tr>
    <td></td>
    <td>{{ childProduct.prodNo }}</td>
    <td>{{ childProduct.prodName }}</td>
    <td>{{ childProduct.prodPrice }}</td>
  </tr>
</template>
<script setup>
defineProps({
  childProduct: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.td {
  width: 32%;
  border: 1px solid;
  display: inline-block;
}

.td > ul {
  list-style-type: none;
  margin-left: 0px;
}

.td > ul img {
  width: 80%;
  max-width: 300px;
}

.td > ul > li.prod_name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
