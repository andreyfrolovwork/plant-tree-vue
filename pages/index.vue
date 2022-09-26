<template lang="pug">
  section.main-wrapper
    CustomNavBar
    ScreensPages
    section.main-page
      f-header
      div.body-index main page
        img.img-sc1(src="/images/screen_1.png")
        img.img-sc1(src="/images/screen_1.png")
        img.img-sc1(src="/images/screen_1.png")
        img.img-sc1(src="/images/screen_1.png")
        img.img-sc1(src="/images/screen_1.png")
</template>
<script>
import { mapActions } from "vuex";
import ScreensPages from "~/components/ScreensPages.vue";
import FHeader from "~/components/f-header.vue";
export default {
  middleware: "auth-m",
  name: "IndexPage",
  data() {
    return {
      isViewScreens: "",
      isOpenModal:false
    };
  },
  methods: {
    ...mapActions(["logout"]),
    logoutMethod() {
      this.logout().then(() => {
        console.log("after logout");
        this.$router.push("/login");
      });
    },
  },
  mounted() {

  }
};
</script>
<style lang="scss">
@import "../fonts/fonts";
@import "main";
/*

.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  align-items: center;
}

.grid-6-12 {
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(6, 1fr);
  //grid-template-rows: repeat(12,1fr);
  grid-column-gap: 16px;
}
*/

</style>
