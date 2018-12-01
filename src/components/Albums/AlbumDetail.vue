<template>
 <section>
   <h2> {{album.title}}</h2>
   <p>
      <button @click="showModal = true">Add Image</button>
  </p>
    <div v-if="showModal" class="modal">
      <div class="content">
        
        <form @submit.prevent="handleAdd()">
          <label>
            <span>Title:</span>
            <input v-model="image.title" required>
          </label>

          <label>
            <span>Image Url:</span>
            <input v-model="image.url" required>
          </label>
        
          <label>
            <span></span>
            <button type="submit">Add</button>
          </label>
        </form>

        <button @click="showModal = false">Close</button>
      </div>
    </div>
    <nav>
      <RouterLink to="./thumbnail">Thumbnail</RouterLink>
      <RouterLink to="./gallery">Gallery</RouterLink>
      <RouterLink to="./list">List</RouterLink>
    </nav>
   <RouterView :images="album.images">DEFAULT VIEW</RouterView>

  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';

export default {
  data() {
    return {
      album: null,
      showModal: false,
      image: {}

    };
  },
  methods: {
    handleAdd() {
      this.album.images.push(this.image);
      this.showModal = false;
      this.image = {};
    }
  },
  // components: {
  
  // },

 
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  }
  
};
</script>

<style>

</style>
