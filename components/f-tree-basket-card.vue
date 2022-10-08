<template lang="pug">
section.f-b-c-wrap
  div.f-b-c-block-pic
    img.f-card-pic-img(:src="config.imgPath + tree.picturePath")
  div.f-b-c-block
    div.f-b-c-description
      div.f-b-c-block-1
        span.f-b-c-name {{tree.name}}
        span.f-b-c-label {{tree.specie}}
      div.f-b-c-block-2
        div.f-b-c-price ₽{{tree.price}}
        div.f-b-c-price {{tree.count}}шт.
    div.f-b-c-block-3
      button.f-b-c-del ╳
</template>

<script>
import config from "@/config/config.js";
export default {
  name: "FTreeBasketCard",
  props:['tree'],
  data() {
    return {
      config: { ...config },
    };
  },
};
</script>

<style lang="scss">
.f-b-c-name {
  display: flex;
  flex: 1;
  font-family: "m-e-bold", serif;
  font-style: normal;
  font-weight: 800;
  color: #000000;
  font-size: 24px;
  line-height: 34px;
}

.f-b-c-label {
  font-family: "m-e-bold", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 30px;
  color: #474A57;
}

.f-b-c-wrap {
  margin: 16px 16px 16px 16px;
  display: flex;
  flex-flow: row;
}
.f-b-c-block-pic {
  display: flex;
  background: #FFBD12;
  border-radius: 16px;
  width: 10vh;
  margin: 0 16px 0 0;
}
.f-b-c-block {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  flex: 1;
}
.f-b-c-description {
  flex: 1;
  display: flex;
  flex-flow: column;
}
.f-b-c-block-2 {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.f-b-c-price {
  font-family: "m-e-bold",serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 34px;
}
.f-b-c-del {
  width: fit-content;
  height: fit-content;
  font-weight: 900;
  border: none;
  background: none;
}
</style>
