<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['searchProductEvent']);
const word = ref('');

const search = () => {
  const eventValue = word.value + '상품을 검색했습니다';
  emit('searchProductEvent', eventValue);
};
</script>

<template>
  <div>
    <input
      type="text"
      placeholder="검색할 상품명을 입력하세요"
      v-model="word"
      @keyup.enter="search"
    />
    <button @click="search">검색</button>
  </div>
</template>
