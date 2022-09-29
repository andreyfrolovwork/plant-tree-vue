<template lang="pug">
section
  f-navbar
  f-header
    template Мои деревья
  section board page
</template>

<script>
export default {
  name: "boardPage",
  middleware:'auth-m'
};
</script>

<style lang="scss">

</style>
