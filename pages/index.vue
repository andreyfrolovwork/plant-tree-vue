<template lang="pug">
section.index-wrapper
  ScreensPages
  f-navbar
  f-header.index-body
    template Главная
  section.main-page-1
    div.totem-parent
      div.totem-block
        div.left
          div.label
            div.label-child Узнать свое тотемное дерево
          input.input(type='date')
          button.btn-1 Узнать
    div.label-1
      div.label-child Как работает?
    div.quad-4
      div.quad
        div.quad-img-wrap
          img(src="~/assets/quad-1.svg")
        div.quad-label Выберите дерево
      div.quad
        div.quad-img-wrap
          img(src="~/assets/quad-2.svg")
        div.quad-label Сделайте взнос
      div.quad
        div.quad-img-wrap
          img(src="~/assets/quad-3.svg")
        div.quad-label Пишите свою историю
      div.quad
        div.quad-img-wrap
          img(src="~/assets/quad-4.svg")
        div.quad-label Мы расскажешь о вас всему миру
</template>

<script>
import FHeader from "~/components/f-header.vue";
import FNavbar from "~/components/f-navbar.vue";
import ScreensPages from "~/components/ScreensPages.vue";
import FNavBar from "~/components/f-navbar.vue";
export default {
  name: "mainPage",
  component: {
    ScreensPages,
    FHeader,
    FNavBar
  },
};
</script>

<style lang="scss" >

.totem-parent {
  display: flex;
  justify-content: center;
}
.quad-label {
  font-family: 'm-e-bold',serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 28px;
  width: 155px;
}

.totem-block {
  background-image: url("/images/man.svg");
  background-repeat: no-repeat;
  background-position: 141px 20px;

  display: flex;
  height: 11rem;
  width: 100%;
  /*max-width: 500px;*/
  border: 2px solid #18191F;
  box-shadow: 0px 6px 0px #000000;
  border-radius: 16px;

  margin: 16px 16px 16px 16px;
  padding: 16px;

  font-family: 'm-e-bold',serif;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 32px;

  .left {
    display: flex;
    flex-direction: column;
  }

  .date {

    max-width: fit-content;
  }

  .btn-1 {
    margin: 16px 0 0 0;
    max-width: fit-content;

    width: 8rem;
    height: 2.5rem;
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }
  .input {
    margin: 16px 0 0 0;
    max-width: fit-content;
    background: #FFFFFF;
    border: 1px solid #18191F;
    border-radius: 4px;

    line-height: 32px;
    padding: 0 16px;
  }

}

.label-1 {
  display: flex;
  justify-content: center;
 /* background: #85e8d1;*/
  margin: 16px;

  font-family: 'm-e-bold';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;

}

.quad-4 {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 16px;
}

@media only screen and (min-width: 320px) and (max-width: 479px) {

  .totem-block {
    justify-content: center;
    background-position: 157px 20px;
  }
}


@media only screen and (min-width: 480px) and (max-width: 767px) {
  .totem-block {
    justify-content: center;
    background-position: 259px 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1900px) {
  .totem-block {
    justify-content: center;
    background-position: calc(100vw - 494px) 20px;
  }
}
</style>
