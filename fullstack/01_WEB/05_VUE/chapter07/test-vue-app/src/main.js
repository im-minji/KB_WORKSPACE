import { createApp } from "vue";
import App from "./App.vue";
// 전역 컴포넌트로 설정(1)
// import CheckboxItem from "./components/CheckboxItem.vue";

createApp(App)
  // 전역 컴포넌트로 설정(2)
  // .component("CheckboxItem", CheckboxItem)
  .mount("#app");
