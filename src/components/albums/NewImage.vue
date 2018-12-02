<template>
  <form @submit.prevent="handleSubmit">
    
      <input v-model="category.images.url" required>
      <button>Add</button>

  </form>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';
export default {
    data() {
        return {
            album: {
                url: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            const saved = albumsApi.add(this.url);
            this.$router.push(`/albums/${saved.url}`);
        }
    }
};
</script>

<style>

</style>
