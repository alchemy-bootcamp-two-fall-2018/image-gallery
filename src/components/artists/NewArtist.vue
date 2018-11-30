<template>
  <form @submit.prevent="handleSubmit">
    <label>
      <p>Artist Name:</p>
      <input v-model="newArtist.name" required>
    </label>
    <label>
      <p>Artist Image:</p>
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
