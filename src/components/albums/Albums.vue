<template>
  <section>
    <h2 class="album-title">Albums</h2>
    <button @click="showModal = true">Add New Album</button>
    <Modal class="modal" v-if="showModal" v-bind:onClose="() => showModal = false">
      <NewAlbum/>
    </Modal>
    <AlbumList v-bind:albums="albums"/>
  </section>
</template>

<script>
import albumsApi from '../../albumsApi.js';
import AlbumList from './AlbumList.vue';
import NewAlbum from './NewAlbum.vue';
import Modal from '../Modal.vue';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums(),
      showModal: false
    };
  },
  components: {
    AlbumList,
    NewAlbum,
    Modal
  }
};
</script>

<style>
  .album-title {
    text-align: center;
  }
</style>
