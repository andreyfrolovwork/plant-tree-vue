<template lang='pug'>
  section
    f-navbar
    f-header
      template Редактировать товары
    section
      TTable(:rows="this.$store.state.trees")
        Column(prop="name" title="Name")
        Column(prop="specie" title="specie")
        Column(prop="price" title="price")
        Column(prop="absorptionCo2" title="absorptionCo2")
        Column(prop="lifeSpan" title="lifeSpan")
        Column(prop="height" title="height")
        Column(prop="inStore" title="В магазине?")
          template(#default="{row:{inStore}}")
            div.in-store-true(v-show="inStore") да
            div.in-store-false(v-show="!inStore") Нет
        Column(prop="description" title="description")
        Column(prop="picturePath" title="picturePath")
          template(#default="{ row: { picturePath } }")
            .img-block
              img(class="image" :src="picturePath")
        Column(prop="picturePath" title="Действия")
          template(#default="{row:{_id}}")
            div {{_id}}
            button edit
            button save
            button delete
      button(@click="addTree") добавить дерево
</template>
<!--
         Column(prop="id" title="ID")
          template(#label)
            div Идентификатор
          template(#default="{ row }")
            h1 {{row.id}}

        Column(prop="picturePath" title="picturePath")
          template(#default="{ row: { image } }")
            .img-block
              img(class="image" :src="image")-->
<script>
import TTable from '@/components/TTable.vue'
import CColumn from '@/components/CColumn.vue'
/* import { mapActions } from "vuex"; */

export default {
  name: 'adminPage',
  data() {
    return {
      rows: 'test'
    }
  },
  methods:{
    addTree(){
      this.$store.dispatch('addTree')
    }
  },
  mounted() {
    this.$store.dispatch('fetchTrees')
    console.log(this.$store);
  },
  components: {
    TTable,
    CColumn,
  },
}
</script>

<style lang="scss">
.img-block{
  clear: both;
  float: left;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  background: #282828;
}

.img-block img{
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.in-store-true {
  box-sizing: border-box;
  margin: 0 8px 0 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  display: inline-block;
  height: auto;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  color: rgb(140, 242, 97);
  background-image: initial;
  background-color: rgb(39, 62, 0);
  border-color: rgb(64, 120, 21);
}

.in-store-false {
  box-sizing: border-box;
  margin: 0 8px 0 0;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  display: inline-block;
  height: auto;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  color: rgb(243, 98, 59);
  background-color: rgb(65, 28, 0);
  border-color: rgb(133, 47, 0);
}
</style>
