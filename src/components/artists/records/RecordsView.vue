<template>
  <section>
    <AddRecord :onAdd="handleAdd"></AddRecord>
    <ul>
      <li 
      v-for="album in albums"
      :key="album.title">
      <RouterLink to="./song-list"><img :src="album.imgUrl"></RouterLink>
      </li>
    </ul>
  </section>
</template>

<script>
import AddRecord from './AddRecord';

export default {
  props: {
    albums: Array
  },
  components: {
    AddRecord
  },
  methods: {
    handleAdd(newRecord) {
      console.log(newRecord);
    }
  }
};
</script>

<style>

</style>
