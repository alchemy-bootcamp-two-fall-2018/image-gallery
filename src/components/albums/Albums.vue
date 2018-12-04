<template>
  <section>
    <div>
      <h2 class="album-title">Albums</h2>
      <button class="add-album" @click="showModal = true">Add New Album</button>
    </div>
    <Modal class="modal" v-if="showModal" v-bind:onClose="() => showModal = false">
      <NewAlbum class="content"/>
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

<style scoped>
  .album-title {
    text-align: center;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  button {
    border: 2px solid green;
    border-radius: 5px; 
    width: 12vw;
    text-align: center;
    padding: 5px 0;
  }
  button:hover {
    background: lightgreen;
  }
  h2 {
    margin-top: 0px;
    margin-bottom: 5px;
    padding: 10px;
    font-size: 3rem;
    text-shadow: 2px 2px 2px lightgray;
    font-weight: 400;
  }
</style>
