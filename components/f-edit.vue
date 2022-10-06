<template lang="pug">
  section
    table
      tr
        th name
        th specie
        th price
        th absorptionCo2
        th lifeSpan
        th height
        th inStore
        th description
        th.f-edit-file picturePath
        th actions
      tr
        td
          input.table-input(v-model="name")
        td
          select.f-edit-select(name="select" v-model="specie" )
            option(value="Лиственные") Лиственные
            option(value="Хвойные") Хвойные
        td
          input.table-input(v-model="price")
        td
          input.table-input(v-model="absorptionCo2")
        td
          input.table-input(v-model="lifeSpan")
        td
          input.table-input(v-model="height")
        td
          select.f-edit-select(name="select" v-model="inStore" )
            option(value="true") Да
            option(value="false") Нет
        td
          input.table-input(v-model="description")
        td
          input.table-input(ref="fileIn" type="file" @change="setFile")
        td
          button(@click="save()") save
</template>

<script>
export default {
  name: "f-edit",
  props: ["row"],
  /* data() {
    return {
      test:""
    }
  }, */
  computed: {
    name: {
      get() {
        return this.$store.state.treeEditedRow.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      }
    },
    specie: {
      get() {
        return this.$store.state.treeEditedRow.specie;
      },
      set(value) {
        this.$store.commit("updateSpecie", value);
      }
    }
    ,
    price: {
      get() {
        return this.$store.state.treeEditedRow.price;
      },
      set(value) {
        this.$store.commit("updatePrice", value);
      }
    }
    ,
    absorptionCo2: {
      get() {
        return this.$store.state.treeEditedRow.absorptionCo2;
      },
      set(value) {
        this.$store.commit("updateAbsorptionCo2", value);
      }
    }
    ,
    lifeSpan: {
      get() {
        return this.$store.state.treeEditedRow.lifeSpan;
      },
      set(value) {
        this.$store.commit("updateLifeSpan", value);
      }
    }
    ,
    height: {
      get() {
        return this.$store.state.treeEditedRow.height;
      },
      set(value) {
        this.$store.commit("updateHeight", value);
      }
    }
    ,
    inStore: {
      get() {
        return this.$store.state.treeEditedRow.inStore;
      },
      set(value) {
        this.$store.commit("updateInStore", value);
      }
    }
    ,
    description: {
      get() {
        return this.$store.state.treeEditedRow.description;
      },
      set(value) {
        this.$store.commit("updateDescription", value);
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch("saveTree").then(() => {
        this.$refs.fileIn.value = ''
      });
    },
    setFile(event) {
      console.log('setFile');
      console.log(event.target.files);
      this.$store.commit("updatePicturePath", event.target.files[0]);

    },
  }
};
</script>

<style lang="scss" scoped>
.f-edit-select {
  width: 100%;
}
.f-edit-file {
/*  width: 200px;*/
}
</style>
