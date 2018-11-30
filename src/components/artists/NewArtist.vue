<template>
  <h2>Hello</h2>
  <!-- <form @submit.prevent="handleSubmit">
    <input v-model="artist.name" required>
    <button>Add</button>
  </form> -->
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
      console.log('added');
    }
  }
};
</script>

<style>

</style>
