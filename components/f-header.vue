<template lang="pug">
section
  div.header
    slot
</template>

<script>
export default {
  name: "f-header"
};
</script>

<style scoped>
.header {
  background: #d5d5d5;
  font-family: 'm-e-bold';
  font-weight: 800;
  font-size: 27px;
  line-height: 9rem;
  text-align: center;
  height: 118px;
}
</style>
