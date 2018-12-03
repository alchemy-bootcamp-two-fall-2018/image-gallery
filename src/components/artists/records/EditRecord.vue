<template>
    <section>
        <h3>Edit this Record:</h3>
        <form @submit.prevent="onUpdateRec(updateRec)">
        <label>
            Record Title:
            <input v-model="updateRec.title" required>
        </label>
        <label>
            Record Image URL:
            <input v-model="updateRec.imgUrl" required>
        </label>
        <button>Add</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      updateRec: {}
    };
  },
  props: {
    onUpdateRec: Function
  }
};
</script>

<style>

</style>
