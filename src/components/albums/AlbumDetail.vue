<template>
    <section v-if="album">
    <h2>{{album.title}}</h2>
    <h3>Images</h3>
    <p>
      <button @click="showModal = true">Add a new Image</button>
    </p>
    <Modal v-if="showModal" :onClose="() => showModal = false">
      <AddImage 
            :onAdd="handleImageAdd"
            />
    </Modal>
    <nav>
      <RouterLink to="./thumbnail">Thumbnail</RouterLink>
      <RouterLink to="./list">List</RouterLink>
      <RouterLink to="./gallery">Gallery</RouterLink>
    </nav>
    <RouterView :images="album.images">DEFAULT VIEW</RouterView>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AddImage from './images/AddImage';
import Modal from '../shared/Modal';

export default {
  data() {
    return {
      album: null,
      showModal: false
    };
  },

  components:{
    Modal,
    AddImage
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  },
  methods: {
    handleImageAdd(image) {
      albumsApi.addImage(image, this.album);
      this.showModal = false;
    }
  }
};
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .6); 
  }
  .content {
    background: white;
    padding: 50px;
  }
</style>
