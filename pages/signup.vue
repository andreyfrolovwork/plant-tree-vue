<template lang="pug">
section
  b-form(@submit='onSubmit' @reset='onReset' v-if='show')
    h1 Регистрация
    b-link(href="/login") перейти ко входу
    b-form-group#input-group-1(
      label='Email address:'
      label-for='input-1'
      description="We'll never share your email with anyone else."
      )
      b-form-input#input-1(
        v-model='form.email'
        type='email'
        placeholder='Enter email'
        required=''
        )
    b-form-group#input-group-2(
      label='Your password:'
      label-for='input-2'
      )
      b-form-input#input-2(
        v-model='form.password'
        placeholder='Enter password'
        required=''
        )
    b-button(type='submit' variant='primary') Submit
    b-button(type='reset' variant='danger') Reset
    b-button(type='reset' variant='danger' @click="showAlert" ) show
  b-card.mt-3(header='Form Data Result')
    pre.m-0.
      \n{{ form }}
  b-alert(
    :show='dismissCountDown'
    dismissible=''
    variant='warning'
    @dismissed='dismissCountDown=0'
    @dismiss-count-down='countDownChanged'
    )
    p {{errorMessage}}.
    b-progress(
      variant='warning'
      :max='dismissSecs'
      :value='dismissCountDown'
      height='4px'
      )

</template>

<script>
import {  mapActions } from "vuex";

export default {
  middleware: "auth-m",
  name: "LoginPage",
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      errorMessage:''
    }
  },
  methods: {
    ...mapActions(['signup']),
    onSubmit(event) {
      event.preventDefault()
      this.signup(this.form).then((r) => {
        this.$router.push('/board')
      }).catch((er) => {
        this.form.email = ''
        this.form.password = ''
        this.errorMessage = er
        this.showAlert()
      })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''

    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style scoped>

</style>
