<template lang="pug">
section
  f-modal(v-show="showModal" @close="closeModal")
    template Переходим на страницу оплаты
  f-navbar
  f-header
    template Корзина
  section
    div(v-for="tree in $store.state.basket.items")
      f-tree-basket-card(:tree="tree")
    div.basket-total
      div.b-t-total-price ₽{{$store.getters.basketTotalPrice}}
      div.b-t-btn
        button.btn-2.b-t-buy-button(@click="buyMethod") Оплатить

</template>

<script>
import FTreeBasketCard from '~/components/f-tree-basket-card.vue'
export default {
  name: "BasketPage",
  components:{
    FTreeBasketCard
  },
  data(){
    return {
      showModal:false
    }
  },
  methods: {
    closeModal(){
      this.showModal = false
    },
    buyMethod(){
      this.$store.dispatch('buyTrees').then(() => {
        this.$router.push('/board')
      })
      this.showModal = true
    }
  }
};
</script>

<style lang="scss">
.basket-total {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  margin: 24px 16px 16px 16px;
}

.b-t-total-price {
  font-family: "m-e-bold", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 54px;
}

.b-t-buy-button {
  height: 54px;
}
</style>
