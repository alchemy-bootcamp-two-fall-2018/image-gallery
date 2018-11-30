<template>
  <section>
    <h2 class="album-title">Albums</h2>
    <!-- <button @click="showModal = true">Add New Album</button> -->
    <NewAlbum/>
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
