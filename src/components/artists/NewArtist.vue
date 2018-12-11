<template>
  <section>
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

    <h3 calss="err" v-show="error" >{{error}}</h3>
  </section>
</template>

<script>
import artistsApi from '../../services/artistsApi';

export default {
  data() {
    return {
      newArtist: {},
      error: null
    };
  },
  methods: {
    handleSubmit() {
      if(artistsApi.findArtist(this.newArtist.name)) {
        this.error = 'Artist already exists! Try again.';
      } else {
        this.error = null;
        artistsApi.addArtist(this.newArtist);
      }
    }
  }
};
</script>

<style>
.err{
  color: red;
}
</style>
