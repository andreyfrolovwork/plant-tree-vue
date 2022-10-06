<template lang="pug">
section
  f-navbar
  f-header
    template Товары
  section.trees
    div(v-for="tree in this.$store.state.treesInStore")
      f-tree-card(:tree="tree")
</template>

<script>
import FTreeCard from '@/components/f-tree-card.vue'
export default {
  components:{
    FTreeCard
  },
  name: "treesPage",
  mounted(){
    this.$store.dispatch('getAllTreesInStore')
  }
};
</script>

<style scoped>

</style>
