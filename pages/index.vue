<template lang="pug">
  section
    NavBar
    button.btn-1 yellow
    button.btn-2 black
    button.btn-1.btn-2 white
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
    div sssssssssssssssssssssss
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavBar from '~/components/NavBar.vue'
export default {
  middleware: "auth-m",
  name: "IndexPage",
  methods: {
    ...mapActions(["logout",]),
    logoutMethod() {
      this.logout().then(() => {
        console.log('after logout');
        this.$router.push("/login");
      });
    }
  },
  mounted() {

  }
};
</script>
<style lang="scss">
@import "../fonts/fonts.scss";
@import "main";
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  align-items: center;
}

.center_modal {

}
</style>
