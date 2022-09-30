<template lang='pug'>
  div
    TTable(:rows="rows")
      Column(prop="id" title="ID")
        template(#label)
          div Идентификатор
        template(#default="{ row }")
          h1 {{row.id}}
      Column(prop="name" title="Name")
      Column(prop="rating" title="Rating")
      Column(prop="image" title="Изображение")
        template(#default="{ row: { image } }")
          .img-block
            img(class="image" :src="image")
</template>

<script>
import TTable from '@/components/TTable.vue'
import CColumn from '@/components/CColumn.vue'

export default {
  name: 'adminPage',
  data() {
    return {
      rows: [
        {
          id: 1,
          name: 'Sony',
          rating: 777,
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        },
        {
          id: 2,
          name: 'Apple',
          rating: 555,
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        },
        {
          id: 3,
          name: 'Samsung',
          rating: 333,
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        },
      ],
    }
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
</style>
