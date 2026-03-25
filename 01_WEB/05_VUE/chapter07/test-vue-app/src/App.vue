<template>
  <div>
    <h2>App 컴포넌트</h2>
  </div>
  <hr />
  <CheckboxItem></CheckboxItem>
  <CheckboxItem></CheckboxItem>
  <CheckboxItem></CheckboxItem>
  <CheckboxItem></CheckboxItem>
</template>

<script>
import CheckboxItem from "./components/CheckboxItem.vue";

export default {
  name: "App",
  components: {
    CheckboxItem,
  },
};
</script>
