<template lang="pug">
  section.lg
    f-navbar
    f-header
      template Регистрация
    section.login-wrapper
      form.form-group
        img.form-tree(src="~/assets/ico-1.png")
        div.form-head Регистрация
        div.form-control-wrapper
          img.form-ico(src="~/assets/user.svg")
          input.form-control(v-model='form.email' type='email' placeholder='Email' required='')
        div.form-control-wrapper
          img.form-ico(src="~/assets/lock.svg")
          input.form-control(v-model='form.password' type='password' placeholder='Confirm Password' required='')
        div.form-control-wrapper
          img.form-ico(src="~/assets/lock.svg")
          input.form-control(v-model='form.passwordAgain' type='password' placeholder='Confirm Password Again' required='')
        input.btn-2.form-submit(type='submit' @click='onSubmit')
        p.p Есть аккаунт?
          a.a(href='/login2')  Войти
    f-modal(v-show='showModal' @close="closeModal")
      template Введеные пароли не совпадают

</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "login2Page",
  data() {
    return {
      form: {
        email: "",
        password: "",
        passwordAgain: "",
      },
      showModal:false
    };
  },
  methods: {
    closeModal(){
      this.showModal = false
    },
    ...mapActions(["login"]),
    onSubmit(event) {
      event.preventDefault();
      this.showModal = true
  /*     if(this.form.password !== this.form.passwordAgain){

      }
      this.login(this.form).then((r) => {
        this.$router.push("/board");
      }).catch((er) => {
        this.form.email = "";
        this.form.password = "";
        this.errorMessage = er;
        /!* this.showAlert() *!/
      }); */
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
    }
  }
};
</script>

<style lang="scss">
@import "login.scss";

</style>
