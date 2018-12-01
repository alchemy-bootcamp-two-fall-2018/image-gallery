<template>
  <section>
    <h3>Gallery View</h3>
    <button @click="setIndex(-1)">&lt;</button>
    <button @click="setIndex(1)">&gt;</button>
    <p>{{albums[index].title}}</p>
    <p><img :src="albums[index].imgUrl"></p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    };
  },
  props: {
    albums: Array,
  },
  methods: {
    setIndex(amount) {
      this.index += amount;
    }
  }
};
</script>

<style>

</style>
