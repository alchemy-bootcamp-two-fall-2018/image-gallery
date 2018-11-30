<template>
  <section v-if="album">
    <h2>{{album.title}}</h2>
    <p>
      <button @click="showModal = true">Add Image</button>
    </p>
    <div v-if="showModal" class="modal">
      <div class="content">
        
        <form @submit.prevent="handleAdd()">
          <p class="form-title">Add Image</p>
          <label>
            <span>Title:</span>
            <input v-model="image.title" required>
          </label>

          <label>
            <span>Image Url:</span>
            <input v-model="image.url" required>
          </label>
          
          <button type="submit">Add</button>
          <button @click="showModal = false">Close</button>
          
        </form>
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

    border: 5px solid black;
    background: white;
    padding: 40px;
    height: 300px;
    width: 400px;
  }

  .form-title {
    margin: 0px;
    padding-bottom: 20px;
    font-size: 2em;    
  }

  form button {
    margin: 5px;
    font-size: 1.2em;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
  }

  form button:hover {
    background: lightgreen;
  }

  p button {
    border-radius: 5px;
    margin: 5px;
    font-size: 1em;
    padding-bottom: 5px;
    border: 2px solid black;
  }

  p button:hover {
    background: rgb(244, 37, 37);
  }

  section p {
    text-align: center;
  }

  span {
    display: inline-block;
    width: 90px;
  }

  input {
    width: 250px;
    height: 20px;
  }

  label {
    display: flex;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .modal {
    position: fixed;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
  }

  h2 {
    text-align: center;
    font-size: 3em;
    padding: 0px;
    margin: 5px 0px 0px 0px;
  }
</style>
