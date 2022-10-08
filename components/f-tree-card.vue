<template lang="pug">
  section
    div.f-card-wrap
      div.f-card-pic-block
        img.f-card-pic-img(:src="config.imgPath + tree.picturePath")
      div.f-card-name-label
        div.left
          span.name {{tree.name}}
          span.co2 ~ {{tree.absorptionCo2}}л. CO2/год
        div.right
          span.label {{tree.specie}}
      div.f-card-desc {{tree.description}}
      div.f-card-price-count
        div.f-card-price ₽{{tree.price}}
        div.f-card-count-btn
          f-count-btn(:id="tree._id")
      div.f-card-btn-block
        button.btn-2.f-card-buy-btn(@click="addToBasket") Купить
</template>

<script>
import config from "@/config/config.js";
import FCountBtn from '@/components/f-count-btn.vue'
export default {
  components:{
    FCountBtn
  },
  props: ["tree"],
  name: "FTreeCard",
  data() {
    return {
      config: { ...config },
      count:0
    };
  },
  methods:{
    addToBasket(){
      console.log('add');
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
