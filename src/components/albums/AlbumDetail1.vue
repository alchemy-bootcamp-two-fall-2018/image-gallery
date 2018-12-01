<template>
  <section v-if="album">
    <h2>{{album.title}}</h2>
    <p class="album-description">{{album.description}}</p>
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

          <label>
            <span>Image Description:</span>
            <input v-model="image.description" required>
          </label>
          
          <button type="submit">Add</button>
          <button @click="onCancel">Close</button>
          
        </form>
      </div>
    </div>

    <nav>
      <RouterLink class="view-link" to="./thumbnail"><span>Thumbnail</span></RouterLink>
      <RouterLink class="view-link" to="./list"><span>List</span></RouterLink>
      <RouterLink class="view-link" to="./gallery"><span>Gallery</span></RouterLink>
    </nav>

    <RouterView v-bind:images="album.images">VIEW</RouterView>
  </section>
</template>

<script>
import albumsApi from '../../albumsApi';

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
    },
    onCancel() {
      this.image = {};
      this.showModal = false;
    }
  },
  components: {
    
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
    if(!this.album) {
      this.$router.push('/albums');
    }
  }
};
</script>

<style scoped>
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

  /* .link {
    display: inline-block;
    width: 250px;
    text-align: center;
    border-radius: 5px;
    font-weight: 600;
    font-size: 2em;
  } */

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

  label span {
    width: 150px;
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

  .view-link {
    text-decoration: none;
    color: red;
    background: white;
    padding: 6px;
    line-height: 2.5em;
    margin: 0px 5px;
    width: 150px;
  }

  nav {
    margin: 0px 10px;
    text-decoration: none;
    text-align: center;
  }


</style>
