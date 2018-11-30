<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add an Album</h3>
    <input v-model="album.title" required>
    <button>Add</button>
  </form>
</template>

<script>
import albumsApi from '../../albumsApi';

export default {
  data() {
    return {
      album: {
        title: ''
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