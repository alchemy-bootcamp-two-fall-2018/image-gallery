<template>
    <div>
        <h2>Image Albums</h2>
        <button @click="showModal = true">Add a new Album</button>
        <Modal v-if="showModal" :onClose="() => showModal = false">
                      <NewAlbum />
        </Modal>
        <AlbumList :albums="albums"/>
      </div>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AlbumList from './AlbumList';
import NewAlbum from './NewAlbum';
import Modal from '../shared/Modal';


export default {
  data() {
    return {
      albums: albumsApi.getAlbums(),
      showModal: false
    };
  },
  components: {
    NewAlbum,
    AlbumList,
    Modal

  }
};
</script>

<style>

</style>
