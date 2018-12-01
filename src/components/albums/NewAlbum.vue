<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add an Album</h3>
    
    <label>Album Title: 
      <input v-model="album.title" required>
    </label>

    <label>Album Description: 
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