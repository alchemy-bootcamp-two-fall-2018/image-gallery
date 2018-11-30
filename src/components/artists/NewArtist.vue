<template>
  <form @submit.prevent="handleSubmit">
    <label>
      <p>Artist Name: </p>
      <input v-model="artist.name" required>
    </label>
    <button>Add</button>
  </form>
</template>

<script>
import artistsApi from '../../services/artistsApi';

export default {
  data() {
    return {
      artist: {}
    };
  },
  methods: {
    handleSubmit() {
      artistsApi.addArtist();
    }
  }
};
</script>

<style>

</style>
