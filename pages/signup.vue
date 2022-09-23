<template lang="pug">
section
  b-form(@submit='onSubmit' @reset='onReset' v-if='show')
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
  b-card.mt-3(header='Form Data Result')
    pre.m-0.
      \n{{ form }}

</template>

<script>
import {  mapActions } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit(event) {
      event.preventDefault()
      this.login(this.form)
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''

    }
  }
}
</script>

<style scoped>

</style>
