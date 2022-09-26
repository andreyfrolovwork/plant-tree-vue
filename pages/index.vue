<template lang="pug">
  section.main-wrapper
    CustomNavBar
    ScreensPages
    f-header
      template Главная
    section.main-page-1
      div.label-1 Future Forest Твой персональный углеродный менеджер
      div.totem-block
        div.left
          div.label Узнать свое тотемное дерево
          input.input(type='date')
          button.btn-1 Узнать
        div.right
          img.man(src="~assets/man.svg")
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
.main-page-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.totem-block {
  display: grid;
  grid-template-columns: 1fr minmax(200px,1fr);
  max-width: 500px;

  border: 2px solid #18191F;
  box-shadow: 0px 6px 0px #000000;
  border-radius: 16px;

  margin: 16px 16px 16px 16px;
  padding: 16px;

  font-family: 'm-e-bold';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 32px;

  .left {
    display: flex;
    flex-direction: column;
  }

  .date {
    margin: 16px;
    max-width: fit-content;
  }

  .btn-1 {
    margin: 16px;
    max-width: fit-content;

    width: 8rem;
    height: 2rem;
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }
  .input {
    max-width: fit-content;
    margin: 16px;
    background: #FFFFFF;
    border: 1px solid #18191F;
    border-radius: 4px;

    line-height: 32px;
    padding: 0 16px;
  }

}

.label-1 {
  margin: 16px;

  font-family: 'm-e-bold';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
  .main-page-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}


@media only screen and (min-width: 480px) and (max-width: 767px) {
  .main-page-1 {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }
  .label-1 {
    max-width: 30%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1900px) {
  .main-page-1 {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }
  .label-1 {
    max-width: 30%;
  }
}

</style>
