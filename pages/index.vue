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
        div.quad(@click="$router.push('/trees')")
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
          div.quad-label Мы расскажешь о вас всему
      div.text-block
        div.test-head Пройти тест на углеродную нейтральность
        div.test-button-block
          button.btn-2.test-button(@click="startTest") Пройти тест
      f-quis(v-show="showModal1" @close="closeModal1")
        template
          section.quis-sec
            div.quis-q1 01. Вопрос
            div.quis-q2 Ваш пол
            div.q-check-box
              div.quis-input-box
                input.quis-checkbox(type="checkbox")
                label.quis-label Женщина
              div.quis-input-box
                input.quis-checkbox(type="checkbox")
                label.quis-label Мужчина
      f-quis(v-show="showModal2" @close="closeModal2")
        template
          section.quis-sec
            div.quis-q1 02. Вопрос
            div.quis-q2 Ваш пол
            div.q-check-box
              div.quis-input-box
                input.quis-checkbox(type="checkbox")
                label.quis-label Женщина
              div.quis-input-box
                input.quis-checkbox(type="checkbox")
                label.quis-label Мужчина
      f-quis(v-show="showModal3" @close="closeModal3")
        template
          section.quis-sec
            div.quis-q1 03. Вопрос
            div.quis-q2 Ваш пол
            div.q-check-box
              div.quis-input-box
                input.quis-checkbox(type="checkbox")
                label.quis-label Женщина
              div.quis-input-box
                input.quis-checkbox(type="checkbox")
                label.quis-label Мужчина
</template>

<script>
import FHeader from "~/components/f-header.vue";
import FNavbar from "~/components/f-navbar.vue";
import FModal from "~/components/f-modal.vue"
import FQuis from "~/components/f-quis.vue"
import ScreensPages from "~/components/ScreensPages.vue";
import FNavBar from "~/components/f-navbar.vue";

export default {
  name: "mainPage",
  component: {
    ScreensPages,
    FHeader,
    FNavBar,
    FModal,
    FQuis
  },
  data(){
    return {
      showModal1:false,
      showModal2:false,
      showModal3:false,
    }
  },
  methods:{
    startTest(){
      console.log('start test');
      document.querySelector('body').style.overflow = 'hidden'
      window.scrollTo({
        top:'0px'
      })
      this.showModal1 = true
    },
    closeModal1(){
      this.showModal1 = false
    },
    closeModal2(){
      this.showModal2 = false
    },
    closeModal3(){
      this.showModal3 = false
    }
  }
};
</script>

<style lang="scss">

@import "quis.scss";

.totem-parent {
  display: flex;
  justify-content: center;
}

.quad-label {
  font-family: 'm-e-bold', serif;
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

  font-family: 'm-e-bold', serif;
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
  justify-content: space-between;
  margin: 0 16px;
}

.quad {
  transition: transform 200ms ease-in-out, color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:hover {
    transform: translate(0px, 2px);
  }

  &:focus {
    transform: translate(0px, 2px);
  }

  &:active {
    transform: translate(0px, 2px);
  }
}

.text-block {
  margin: 0 16px;
}

.test-head {
  text-align: center;

  font-family: 'm-e-bold',serif;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;

  margin-top: 16px;
}

.test-button-block {
  margin: 16px;
  display: flex;
  justify-content: center;
}

.test-button {
  width: 280px;
  height: 60px;
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
