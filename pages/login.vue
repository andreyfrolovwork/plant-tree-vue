<template lang="pug">
  section.lg
    f-navbar
    f-header
      template Войти
    section.login-wrapper
      form.form-group
        img.form-tree(src="~/assets/ico-1.png")
        div.form-head Вход
        div.form-control-wrapper
          img.form-ico(src="~/assets/user.svg")
          input.form-control(v-model='form.email' type='email' placeholder='Email' required='')
        div.form-control-wrapper
          img.form-ico(src="~/assets/lock.svg")
          input.form-control(v-model='form.password' type='password' placeholder='Confirm Password' required='')
        input.btn-2.form-submit(type='submit' @click='onSubmit')
        p.p Нет аккаунта?
          a.a(href='/signup')  Создайте новый
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "loginPage",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit(event) {
      event.preventDefault();
      this.login(this.form).then((r) => {
        this.$router.push("/board");
      }).catch((er) => {
        this.form.email = "";
        this.form.password = "";
        this.errorMessage = er;
        /* this.showAlert() */
      });
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
