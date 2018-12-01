<template>
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
