<template>
  <section>
    <h2>This is Christmas Albums</h2>
    <AlbumList v-bind:albums="albums"/>
  </section>
</template>

<script>
import albumsApi from '../../albumsApi.js';
import AlbumList from './AlbumList.vue';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums()
    };
  },
  components: {
    AlbumList
  }
};
</script>

<style>

</style>
