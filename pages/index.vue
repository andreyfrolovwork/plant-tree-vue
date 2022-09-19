<template lang="pug">
section
  h1 future forest foundation
  b-button(variant="primary" v-b-modal.modal-1) Войти
  div
    b-modal.center_modal#modal-1(centered title='Войти')
      b-form-group(
        id="input-group-1"
        label="Email адрес:"
        label-for="input-1"
        description="Мы никогда не поделимся вашей электронной почтой с кем-либо еще"
        )
        b-form-input(type="email" placeholder="email")
      b-form-group(
        id="input-group-2"
        label="Пароль:"
        label-for="input-2"
        description="Введите свой пароль"
      )
        b-form-input(type="password" placeholder="Пароль")
</template>

<script>
export default {
  middleware: 'auth',
  name: 'IndexPage',
}
</script>
<style lang="scss">
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
