<template lang="pug">
  section.screens_sec(:class='isViewScreens')
    section.screen1
      div.img-bl
        img.img-sc1(src="/images/screen_1.png")
      div.label1 Future Forest Foundation
      div.label2 Мы садим деревья
      div.caption1
        button.btn-2.bt-1(@click="hideAndeMoveToMain") Пропустить
      div.caption2
        button.btn-2.bt-2(@click="toScreen1") Далее
      div.point-3
        img.point-img(src="~assets/elipse.svg")
        img.point-img(src="~assets/elipse_black.svg")
        img.point-img(src="~assets/elipse_black.svg")
    section.screen2
      div.img-bl
        img.img-sc1(src="~assets/woman.svg")
      div.sc2-label2 Вы наделяете их смыслом
      div.sc2-caption
        button.btn-2.bt-2(@click="toScreen2") Далее
      div.point-3
        img.point-img(src="~assets/elipse_black.svg")
        img.point-img(src="~assets/elipse.svg")
        img.point-img(src="~assets/elipse_black.svg")
    section.screen3
      div.sc3-img-bl
        img.img-sc1(src="~assets/Frame 1820.png")
      div.sc3-label2 В дереве живет история о человеке, посадившего его
      div.sc2-caption.vh5
        button.btn-2.bt-2(@click="hideAndeMoveToMain") Закрыть
      div.point-3
        img.point-img(src="~assets/elipse_black.svg")
        img.point-img(src="~assets/elipse_black.svg")
        img.point-img(src="~assets/elipse.svg")
</template>
<script>
import { mapActions } from "vuex";
export default {
  middleware: "auth-m",
  name: "ScreensPages",
  data() {
    return {
      isViewScreens: "hide",
    /*   isViewScreens: "hide", */
      isOpenModal:false
    };
  },
  methods: {
    toScreen1() {

      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    },
    toScreen2() {

      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth"
      });
    },
    hideScreens() {
      this.isViewScreens = "hide";
    },
    hideAndeMoveToMain(){
      this.hideScreens()
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
  mounted() {
    if(localStorage.getItem('isShowScreens') !== 'true'){
      this.isViewScreens = "";

    }

    const observer = new IntersectionObserver(
      () => {

        localStorage.setItem('isShowScreens','true')
        observer.unobserve(document.querySelector(".index-body"))
      }, {
        root: document.querySelector('.index-wrapper'),
        rootMargin: '0px',
        threshold: 0.1
      })

    observer.observe(document.querySelector(".index-body"));
  }
};
</script>
<style lang="scss">

.screen1 {
  width: 100vw;
  height: 100vh;
  background: #FFBD12;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  //grid-template-rows: repeat(12,1fr);
  grid-column-gap: 16px;
}

.img-bl {
  height: 53vh;
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
}

.img-sc1 {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.label1 {
  text-align: center;
  font-family: 'm-e-bold';
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;

  //background: #399a4a;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 8;
  grid-row-end: 10;
}

.label2 {
  text-align: center;
  font-family: 'm-e-medium';
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  color: #474A57;

  //background: #425bad;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 10;
  grid-row-end: 11;
}

.caption1 {
  justify-content: center;
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 11;
  grid-row-end: 12;

}

.caption2 {
  justify-content: center;
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 11;
  grid-row-end: 12;
}

.sc2 {
  //background: #5391e3;
}

.sc3 {
  //background: #c8e8a1;
}

.bt-1 {
  color: black;
  background: white;
  height: 50px;
  width: 165px;
}

.bt-2 {
  height: 50px;
  width: 165px;
}

.point-3 {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 12;
  grid-row-end: 12;
  display: flex;
  justify-content: center;
  height: 20px;
}

.point-img {
  margin: 3px;

}

.screen2 {
  width: 100vw;
  height: 100vh;
  background: #F95A2C;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  //grid-template-rows: repeat(12,1fr);
  grid-column-gap: 16px;
}

.sc2-caption {
  justify-content: center;
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 10;
  grid-row-end: 12;
}

.sc2-label2 {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 7;
  grid-row-end: 11;

  font-family: 'm-e-medium';
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  color: #011C00;
}

.screen3 {
  @extend .screen2;
  background: #00C6AE;
}

.sc3-img-bl {
  height: 53vh;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 8;
}

.sc3-label2 {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 8;
  grid-row-end: 11;

  font-family: 'm-e-medium';
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  color: #011C00;
}

.vh5 {
  padding-top: 5vh;
}

.hide {
  display: none;
}

</style>
