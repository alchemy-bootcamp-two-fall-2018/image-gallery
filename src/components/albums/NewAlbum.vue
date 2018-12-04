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
</style>