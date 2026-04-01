<template>
  <main>
    <!-- <CalcOptionAPI></CalcOptionAPI> -->
    <!-- <CalcComposition></CalcComposition> -->
    <!-- <CalcCompositionAPI2></CalcCompositionAPI2> -->
    <CalcComposition_scriptSetUp></CalcComposition_scriptSetUp>
  </main>
</template>

<script setup>
// 컴포넌트 인스턴스 무조건 생성
// import CalcCompositionAPI2 from './components/CalcCompositionAPI2.vue';
// import CalcComposition from './components/CalcComposition.vue';
// import CalcOptionAPI from './components/CalcOptionAPI.vue';
// import CalcComposition_scriptSetUp from './components/CalcComposition_scriptSetUp.vue';

import { defineAsyncComponent } from 'vue';
const CalcOptionAPI = defineAsyncComponent(() => {
  import('./components/CalcOptionAPI.vue');
});
</script>
