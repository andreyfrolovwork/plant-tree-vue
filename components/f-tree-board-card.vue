<template lang="pug">
  section.f-b-c-wrap
    div.f-b-c-block-pic
      img.f-card-pic-img(:src="config.imgPath + tree.picturePath")
    div.f-b-c-block
      div.f-b-c-description
        div.f-b-c-block-1
          span.f-b-c-label {{date}}
          span.f-b-c-name {{tree.name}}
          span.co2 ~ {{tree.absorptionCo2}}л. CO2/год
        div.f-b-c-block-2
          button.f-map-bt
            img.f-map-svg(src="~assets/map.svg")
            span.f-map-text На карте
</template>

<script>
import dayjs from 'dayjs'
import config from "@/config/config.js";
export default {
  name: "FTreeBoardCard",
  props:['tree'],
  computed:{
    date(){
      return dayjs(this.tree.buyData).format('DD.MM.YYYY')
    }
  },
  data() {
    return {
      config: { ...config },
    };
  },
  methods:{
    removeFromBasket(id){
      this.$store.commit('removeFromBasket',id)
    }
  }
};
</script>

<style lang="scss" scoped>
.f-b-c-block-pic {
  width: 13vh;
}
.f-b-c-block-2 {
  margin: -3px 0 8px 0;
}
.co2 {
  font-family: "m-e-bold-reg", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #65CC2D;
}
.f-map-svg {
  top: 9px;
  position: relative;
  margin-right: 3px;
}
.f-map-text {
  font-family: "m-e-bold", serif;
  font-style: normal;
  font-weight: 800;
  color: #000000;
  font-size: 13px;
  line-height: 13px;
}

.f-map-bt {
  background: none;
  border: none;

  transition: transform 200ms ease-in-out, color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:hover {
    transform: translate(0px, 2px);
  }

  &:focus {
    transform: translate(0px, 2px);
  }

  &:active {
    transform: translate(0px, 2px);
  }
}

.f-b-c-name {
  display: flex;
  flex: 1;
  font-family: "m-e-bold", serif;
  font-style: normal;
  font-weight: 800;
  color: #000000;
  font-size: 22px;
  line-height: 32px;
}

.f-b-c-label {
  font-family: "m-e-bold", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 30px;
  color: #474A57;
}


</style>
