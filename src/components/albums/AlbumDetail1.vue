<template>
  <section v-if="album">
    <h2>{{album.title}}</h2>
    <h3>Images</h3>
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
  components: {
    Thumbnails
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  }
};
</script>

<style>
  form {
    text-align: center;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    border: 2px solid black;
    border-radius: 5px;
    margin: 5px;
    font-size: 0.75em;
  }

  span {
    display: inline-block;
  }

  input {
    width: 150px;
    height: 20px;
  }

  label {
    display: flex;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 500;
  }
</style>
