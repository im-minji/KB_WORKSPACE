<template>
  <h1>App.vue</h1>
  <div>
    <Product></Product>
  </div>
</template>
<script>
import Product from "./components/Product.vue";
export default {
  name: "App",
  components: { Product },
};
</script>
