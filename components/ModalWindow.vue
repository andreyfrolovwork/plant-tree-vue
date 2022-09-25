<template lang="pug">
section.modal
  div.wrapper
    slot
</template>

<script>
export default {
  name: "ModalWindow",
  props:['isOpenModal'],
  methods:{

  }
};
</script>

<style scoped>
.wrapper {
  display: none;
  position: fixed;
  opacity: 0.5;

}
</style>
