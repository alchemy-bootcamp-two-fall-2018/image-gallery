<template>
  <section>
    <h3>Gallery View</h3>
    <button @click="setIndex()">&lt;</button>
    <button @click="setIndex()">&gt;</button>
    <p>{{albums[0].title}}</p>
    <p><img :src="albums[0].imgUrl"></p>
  </section>
</template>

<script>
export default {
  props: {
    albums: Array
  },
  methods: {
    setIndex() {
      console.log('clicked');
    }
  }
};
</script>

<style>

</style>
