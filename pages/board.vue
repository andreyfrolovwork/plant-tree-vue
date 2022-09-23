<template lang="pug">
  section
    b-navbar(toggleable='lg' type='dark' variant='info')
      b-navbar-brand(href='#') NavBar
      b-navbar-toggle(target='nav-collapse2')
      b-collapse#nav-collapse2(is-nav='')
        b-navbar-nav
          b-nav-item(href='#' v-b-modal.modal-1) модал
        b-navbar-nav
          b-nav-item(@click="logoutMethod") Выйти
    b-modal#modal-1(title='BootstrapVue')
      p.my-4 Hello from modal!
    b-link(href="/login") перейти ко входу
    br
    b-link(href="/signup") перейти к регистрации
    b-button(type='reset' variant='danger' @click="fetch" ) fetch
    div {{user}}
    div {{allUsers}}
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  middleware: "auth-m",
  name: "BoardPage",
  computed: {
    ...mapGetters(["allUsers"]),
    user(){
      return this.$store.state.authData
    },
  },
  methods: {
    ...mapActions(["logout", "fetchUsers"]),
    fetch() {
      this.fetchUsers();
    },
    logoutMethod() {
      this.logout().then(() => {
        console.log('after logout');
        this.$router.push("/login");
      });
    }
  }
};
</script>
