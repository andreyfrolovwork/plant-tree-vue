<template lang="pug">
div
  section.sidebar(:class='sidebarClass')
    a.active(href='#home') Home
    a(href='#news') News
    a(href='#contact') Contact
    a(href='#about') About
    button(@click="close") close
  div.rem
    button(@click="open" :class="openBtnClass") open
</template>

<script>
export default {
  name: "CustomNavBar",
  data() {
    return {
      sidebarClass: '',
      openBtnClass:''
    }
  },
  methods:{
    open(){
      console.log('open');
      this.sidebarClass = 'open'
      this.openBtnClass = 'hide'
    },
    close(){
      console.log('close');
      this.sidebarClass = 'close'
      this.openBtnClass = ''
    }
  }
};
</script>

<style>
/* The side navigation menu */
.sidebar {
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
 width: 70vw;
}
.close {
  width: 0px;
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
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

.rem {
  position: fixed;
  margin: 20px;
}

.hide{
  display: none;
}
</style>
