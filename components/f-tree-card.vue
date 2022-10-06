<template lang="pug">
section tree card
  div.f-card-pic-block
    img.f-card-pic-img(:src="config.imgPath + tree.picturePath")
  div.f-card-name-label
    span.name {{tree.name}}
    span.label {{tree.specie}}
  div.f-card-desc {{tree.description}}
  div.f-card-price-count
    div.f-card-price {{tree.price}}
    div.f-card-count-btn
  div.f-card-btn-block
    button.btn-2 Купить
  div.f-card-abs
</template>

<script>
import config from '@/config/config.js'
export default {
  props:['tree'],
  name: "fTreeCard",
  data(){
    return {
      config:{...config}
    }
  }

};
</script>

<style lang="scss">

</style>
