<template>
  <section>
  <h3>Add a Record</h3>
    <form @submit.prevent="onAdd(record)">
      <label>
        Record Title:
        <input v-model="record.title" required>
      </label>
      <label>
        Record Image URL:
        <input v-model="record.imgUrl" required>
      </label>
      <button>Add</button>
  </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      record: {}
    };
  },
  props: {
    onAdd: Function
  }
};
</script>

<style>

</style>
