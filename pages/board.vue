<template lang="pug">
  section
    b-navbar(toggleable='lg' type='dark' variant='info')
      b-navbar-brand(href='#') NavBar
      b-navbar-toggle(target='nav-collapse2')
      b-collapse#nav-collapse2(is-nav='')
        b-navbar-nav
          b-nav-item(href='#') to landing page
        b-navbar-nav.ml-auto
          b-nav-item-dropdown(right='')
            template(#button-content='')
              em User
            b-dropdown-item(href='#') Profile
            b-dropdown-item(href='#') Войти
            b-dropdown-item(href='#' v-b-modal.modal-1) modal
    b-modal#modal-1(title='BootstrapVue')
      p.my-4 Hello from modal!

</template>

<script>
export default {
  name: 'BoardPage',
}
</script>
