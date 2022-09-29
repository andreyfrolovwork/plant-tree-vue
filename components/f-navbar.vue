<template lang="pug">
section
  section.sidebar(:class='sidebarClass')
    div.menu-header
      button.btn-close(@click="close")
        img.point-img(src="~assets/close-ico.svg")
      div.menu-label Меню
    a.bar-item(href='/main') Главная
    a.bar-item(href='/trees') Товары
    a.bar-item(href='/board') Мои деревья
    a.bar-item(href='/login') Войти
    a.bar-item(href='/signup') Регистрация
    a.bar-item(v-show="this.$store.state.isAuth" @click="logoutHandle") Выйти
  div.rem
    button.btn-open(@click="open" :class="openBtnClass")
      img(src="~assets/menu2.svg")
</template>
<!---->
<script>
import { mapActions } from "vuex";

export default {
  name: "f-navbar",
  props:['current'],
  computed:{

  },
  data() {
    return {
      sidebarClass: '',
      openBtnClass:''
    }
  },
  methods:{
    ...mapActions(['logout']),
    logoutHandle(){
      this.logout().then(() => {
        console.log('exit');
        this.$router.push('/main')
      })
      /* console.log(this.$store.state.isAuth); */
    },
    open(){
      console.log('open');
      this.sidebarClass = 'open'
      this.openBtnClass = 'hide'
    },
    close(){
      console.log(this.current);
      console.log('close');
      this.sidebarClass = 'close'
      this.openBtnClass = ''
    }
  }
};
</script>

<style lang="scss">
/* The side navigation menu */
.sidebar {
  z-index: 1000;
  margin: 0;
  padding: 0;
  width: 0px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
  transition: width 200ms ease-in-out;
}


.open {
 width: 100%;
}
.close {
  width: 0px;
}
.menu-header {
  display: flex;
}

.menu-label {
  font-family: 'm-e-bold';
  font-weight: 800;
  font-size: 24px;
  height: 118px;
  line-height: 9rem;

  flex-grow: 1;
  text-align: center;

}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */

.rem {
  position: fixed;
  margin: 20px;
}

.hide{
  display: none;
}

.btn-open {
  border: 0px;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0px;
  margin: 24px 0 0 0;
  background: none;
  transition:transform 200ms ease-in-out, color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  &:hover {
     color: #fff;
     border-color: #545b62;
     /*box-shadow: 0 0 0 0.2rem rgb(118 118 118 / 50%);*/
     transform: translate(0px,2px);
   }
  &:focus {
    color: #fff;
    border-color: #545b62;
    /*box-shadow: 0 0 0 0.2rem rgb(118 118 118 / 50%);*/
    transform: translate(0px,2px);
  }
  &:active {
    color: #fff;
    border-color: #545b62;
    /*box-shadow: 0 0 0 0.2rem rgb(118 118 118 / 50%);*/
    transform: translate(0px,2px);
  }
}

.bar-item {
  font-family: 'm-e-bold';
  font-weight: 800;
  font-size: 44px;
  line-height: 54px;
  text-align: center;
}

.btn-close {
  @extend .btn-open;
  border: 0px solid black;

  position: absolute;
  top: 28px;
  left: 10px;
}

</style>
