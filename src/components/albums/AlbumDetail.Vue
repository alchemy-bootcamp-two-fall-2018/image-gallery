<template>
  <section v-if="album">
    <h2>{{album.title}}</h2>
    <h3>Images</h3>
    <p>
      <button @click="showModal = true">Add Image</button>
    </p>
    <div v-if="showModal" class="modal">
      <div class="content">
        <!-- <form @submit.prevent="onAdd(image)">
        </form> -->
        <button @click="showModal = false">Close</button>
      </div>
    </div>
    <Thumbnails v-bind:images="album.images"/>
  </section>
</template>

<script>
import albumsApi from '../../albumsApi';
import Thumbnails from './Thumbnails';
export default {
  data() {
    return {
      album: null,
      showModal: false
    };
  },
  components: {
    Thumbnails
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  }
};
</script>
