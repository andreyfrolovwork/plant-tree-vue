<template lang="pug">
section
  f-navbar
  f-header
    template Мои деревья
  section
    div(v-for="tree in $store.state.history")
      f-tree-board-card(:tree="tree")
</template>

<script>
export default {
  name: "BoardPage",
  middleware:'auth-m',
  mounted() {
    this.$store.dispatch('getMyTrees')
  }
};
</script>

<style lang="scss">

</style>
