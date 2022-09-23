<template lang="pug">
section
  b-navbar(
    toggleable='lg'
    type='dark'
    variant='info'
    fixed="top"
    sticky="true"
    )
    b-navbar-brand(href='#') NavBar
    b-navbar-toggle(target='nav-collapse2')
    b-collapse#nav-collapse2(is-nav='')
      b-navbar-nav
        b-nav-item(href='#' v-b-modal.modal-1) модал
      b-navbar-nav
        b-nav-item(@click="logoutMethod") Выйти
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  methods: {
    ...mapActions(["logout",]),
    logoutMethod() {
      this.logout().then(() => {
        console.log('after logout');
        this.$router.push("/login");
      });
    }
  },
};
</script>

<style scoped>

</style>
