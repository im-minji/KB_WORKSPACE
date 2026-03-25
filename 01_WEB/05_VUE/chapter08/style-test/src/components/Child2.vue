<template>
  <div class="child">
    <h2>Child1</h2>
  </div>
</template>

<script>
export default {
  name: 'Child2',
};
</script>

<style>
/* child2는 blue, child3은 orange */
.child {
  background-color: skyblue;
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
