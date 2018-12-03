<template>
    <section>
        <h3>Edit this Artist:</h3>
        <form @submit.prevent="onUpdateArt(updateArtist)">
        <label>
            Artist Name:
            <input v-model="updateArtist.name" required>
        </label>
        <label>
            Artist Image URL:
            <input v-model="updateArtist.image" required>
        </label>
        <button>Add</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      updateArtist: {}
    };
  },
  props: {
    onUpdateArt: Function
  }
};
</script>

<style>

</style>
