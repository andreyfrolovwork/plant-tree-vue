<template lang="pug">
section
  f-navbar
  f-header
    template Товары
  f-group
  section.trees
    div(v-for="tree in $store.state.treesInStore")
      f-tree-card(:tree="tree")
</template>

<script>
import FTreeCard from '@/components/f-tree-card.vue'
export default {
  name: "TreesPage",
  components:{
    FTreeCard
  },
  mounted(){
    this.$store.dispatch('getAllTreesInStore')
  }
};
</script>

<style scoped>

</style>
