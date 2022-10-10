<template lang="pug">
  section.g-section
    button.g-item(@click="$store.dispatch('getAllTreesInStore')")
      span.g-text Все
    button.g-item(@click="$store.dispatch('getAllTreesInStore','Хвойные')")
      span.g-text Хвойные
    button.g-item(@click="$store.dispatch('getAllTreesInStore','Лиственные')")
      span.g-text Лиственные
</template>

<script>
export default {
  name: "FGroup"
};
</script>

<style lang="scss" scoped>
.g-section {
  margin: 16px;
}

.g.text {
  margin: 0 3px 0 3px;
}

.g-item {
  background: none;
  line-height: 30px;
  margin: 0 5px 0 5px;
  font-family: 'm-e-bold', serif;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;

  border: 2px solid #18191F;
  border-radius: 44px;

  transition: transform 200ms ease-in-out, color .15s ease-in-out, background-color .15s ease-in-out;

  &:hover {
    transform: translate(0px, 2px);
    background: #FFC7DE;
  }

  &:focus {
    transform: translate(0px, 2px);
    background: #FFC7DE;
  }

  &:active {
    transform: translate(0px, 2px);
    background: #FFC7DE;
  }


}

.g-active {
  background: #FFC7DE;
}
</style>
