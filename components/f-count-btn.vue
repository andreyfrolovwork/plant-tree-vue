<template lang="pug">
  section.f-c-wrap
    button.plus-button.plus-button-left(@click="decrementCount") -
    div.f-count {{count}}
    button.plus-button.plus-button-right(@click="incrementCount") +
</template>

<script>
export default {
  name: "FCountBtn",
  props: ["id"],
  data() {
    return {
      test: this.$store.getters.isAuth,
      count:0
    };
  },
  methods: {
    incrementCount() {
      this.$store.commit("incrementTree", this.id);
      this.count++
      console.log("inc");
    },
    decrementCount() {
      if(this.count >= 1){
        this.count--
      }
      this.$store.commit("decrementTree", this.id);
      console.log("dec");
    }
  },
  mounted() {
    const tree = this.$store.state.basket.items.find((tree) => (tree._id === this.id))
    if(tree){
      this.count = tree.count
    }
  }
};
</script>

<style lang="scss">

</style>
