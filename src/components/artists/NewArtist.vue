<template>
  <form @submit.prevent="handleSubmit">
    <label>
      <h4>Artist Name:</h4>
      <input v-model="newArtist.name" required>
    </label>
    <label>
      <h4>Artist Image:</h4>
      <input v-model="newArtist.image" required>
    </label>
    <p><button>Add</button></p>
  </form>
</template>

<script>
import artistsApi from '../../services/artistsApi';

export default {
  data() {
    return {
      newArtist: {}
    };
  },
  methods: {
    handleSubmit() {
      artistsApi.addArtist(this.newArtist);
    }
  }
};
</script>

<style>

</style>
