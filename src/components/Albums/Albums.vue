<template>
  <section>
    <h2>Albums</h2>
    <div id="albumButton"> 
    <button @click="showModal = true">Add a new Album</button>
    </div>
    <Modal v-if="showModal" :onClose="() => showModal = false">
      <NewAlbum/>
    </Modal>
    <AlbumList :albums="albums"/>
  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AlbumList from './AlbumList';
import Modal from './images/Modal';
import NewAlbum from './NewAlbum';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums(),
      showModal: false

    };
  },
  components: {
    AlbumList,
    Modal,
    NewAlbum
  }

};
</script>

<style>

h2 {
  margin: 0;
  padding: 0;
}

#albumButton {
  margin-top: 0;
}

ul {
  text-align: center;
}

</style>