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
import artistsApi from '../../../services/artistsApi';


export default {
  data() {
    return {
      index: 0,
      albums: artistsApi.getAll()
    };
  },
  methods: {
    setIndex(amount) {
      this.index += amount;
      if(this.index === this.albums.length) {
        this.index = 0;
      }
      else if(this.index < 0) {
        this.index = this.albums.length - 1;
      }
    }
  }
};
</script>

<style>

</style>
