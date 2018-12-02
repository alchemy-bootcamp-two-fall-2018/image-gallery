<template>
  <section>
    <AddRecord :onAdd="handleAdd"></AddRecord>
    <ul>
      <li 
      v-for="album in albums"
      :key="album.title">
      <RouterLink :to="`./song-list/${album.title}`"><img :src="album.imgUrl"><p>{{album.title}}</p></RouterLink>
      </li>
    </ul>
  </section>
</template>

<script>
import AddRecord from './AddRecord';
import artistsApi from '../../../services/artistsApi';

export default {
  props: {
    albums: Array
  },
  components: {
    AddRecord
  },
  methods: {
    handleAdd(newRecord) {
      artistsApi.addRecord(newRecord, artistsApi.findArtist(this.$route.params.name).albums);
    }
  }
};
</script>

<style>

</style>
