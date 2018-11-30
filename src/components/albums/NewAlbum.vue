<template>
  <form @submit.prevent="handleSubmit">
      <input v-model="album.title" required>
      <button>Add</button>
  </form>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';

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

<style>

</style>
