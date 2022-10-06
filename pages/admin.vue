<template lang="pug">
  section
    f-navbar
    f-header
      template Редактировать товары
    section
      f-edit(:row="this.$store.state.treeEditedRow")
      TTable(:rows="this.$store.state.trees")
        Column(prop="name" title="Name")
          template(#default="{row:{name}}" )
            div {{name}}
        Column(prop="specie" title="specie")
          template(#default="{row:{specie}}")
            div {{specie}}
        Column(prop="price" title="price")
          template(#default="{row:{price}}")
            div {{price}}
        Column(prop="absorptionCo2" title="absorptionCo2")
          template(#default="{row:{absorptionCo2}}")
            div {{absorptionCo2}}
        Column(prop="lifeSpan" title="lifeSpan")
          template(#default="{row:{lifeSpan}}")
            div {{lifeSpan}}
        Column(prop="height" title="height")
          template(#default="{row:{height}}")
            div {{height}}
        Column(prop="inStore" title="В магазине?")
          template(#default="{row:{inStore}}")
            div.in-store-true(v-show="inStore") да
            div.in-store-false(v-show="!inStore") Нет
        Column(prop="description" title="description")
          template(#default="{row:{description}}")
            div {{description}}
        Column(prop="picturePath" title="picturePath")
          template(#default="{ row: { picturePath } }")
            .img-block
              img(class="image" :src="config.imgPath + picturePath")
        Column(prop="picturePath" title="Действия")
          template(#default="{row:{_id}}")
            button( @click="edit2(_id)") edit
            button(@click="deleteTree(_id)") delete
      button(@click="addTree") добавить дерево
</template>
<script>
import TTable from "@/components/TTable.vue";
import CColumn from "@/components/CColumn.vue";
import FEdit from "@/components/f-edit.vue"
import config from '@/config/config.js'

export default {
  components: {
    TTable,
    CColumn,
    FEdit
  },
  name: "adminPage",
  data() {
    return {
      rows: "test",
      editedRow:{},
      config:{...config}
    };
  },
  computed:{

    test: () => {
      return "test"
    }
  },
  methods: {
    deleteTree(_id){
      this.$store.dispatch('deleteTree',_id)
    },
    addTree() {
      this.$store.dispatch("addTree");
    },
    edit(id) {
      console.log("edit");
      this.$store.commit("editTree", id);
    },
    edit2(id){
      this.$store.commit("editTree2", id);
    }
  },
  mounted() {
    this.$store.dispatch("fetchTrees");
    console.log(this.$store);
  },

};
</script>

<style lang="scss">
.img-block {
  clear: both;
  float: left;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  background: #FFBD12;
}

.img-block img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.in-store-true {
  box-sizing: border-box;
  margin: 0 8px 0 0;
  font-variant: tabular-nums;
  list-style: none;
  display: inline-block;
  height: auto;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  border-radius: 2px;
  color: rgb(140, 242, 97);
  background-image: initial;
  background-color: rgb(39, 62, 0);
  border: 1px solid rgb(64, 120, 21);
}

.in-store-false {
  box-sizing: border-box;
  margin: 0 8px 0 0;
  font-variant: tabular-nums;
  list-style: none;
  display: inline-block;
  height: auto;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  border: 1px solid rgb(133, 47, 0);
  border-radius: 2px;
  color: rgb(243, 98, 59);
  background-color: rgb(65, 28, 0);
}

.table-input {
  font-family: "m-e-medium", serif;
  font-weight: 500;
  font-size: 10px;
  width: 100%;
  border: 1px solid black;
  margin: 0px;
  padding: 0px;
}
</style>
