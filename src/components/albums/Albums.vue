<template>
  <section>
    <h1 class="album-title">Albums</h1>
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
  .album-title {
    text-align: center;
  }
</style>
