<template lang="pug">
section.f-c-wrap
  button.plus-button.plus-button-left(@click="decrementCount") -
  div.f-count 0
  button.plus-button.plus-button-right(@click="incrementCount") +
</template>

<script>
export default {
  name: "fCountBtn",
  methods:{
    incrementCount(){
      console.log('inc');
    },
    decrementCount(){
      console.log('dec');
    }
  }
};
</script>

<style lang="scss" >

</style>
