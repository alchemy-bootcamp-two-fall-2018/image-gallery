<template>
  <form @submit.prevent="handleSubmit" class="album-form">
    <h3 class="form-title">Add an Album</h3>
    
    <label>
      <span>Album Title:</span> 
      <input v-model="album.title" required>
    </label>

    <label>
      <span>Album Description:</span>
      <input v-model="album.description" required>
    </label>

    <button>Add</button>
  </form>
</template>

<script>
import albumsApi from '../../albumsApi';

export default {
  data() {
    return {
      album: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      const saved = albumsApi.add(this.album);
      this.$router.push(`/albums/${saved.id}`);
    }
  }
};
</script>

<style scoped>
  .album-form {
    text-align: center;
    border: 5px solid black;
    background: white;
    padding: 40px;
    height: 300px;
    width: 500px;
  }
  .form-title {
    margin: 0px;
    padding-bottom: 20px;
    font-size: 2em;    
  }
  span {
    width: 150px;
  }
</style>