<template lang="pug">
section
  f-navbar
  f-header
    template Корзина
  section
    div(v-if="$store.state.basket.isEmpty")
      div Корзина пуста
    div(v-else)
     div {{$store.state.basket.items}}
</template>

<script>
export default {
  name: "basketPage"
};
</script>

<style lang="scss">

</style>
