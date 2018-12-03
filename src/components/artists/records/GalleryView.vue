<template>
  <section>
    <h3>Gallery View</h3>
    <button @click="setIndex(-1)">&lt;</button>
    <button @click="setIndex(1)">&gt;</button>
    <h4>{{albumsArray[index].title}}</h4>
    <p><img :src="albumsArray[index].imgUrl"></p>
  </section>
</template>

<script>
import artistsApi from '../../../services/artistsApi';


export default {
  data() {
    return {
      index: 0,
      albumsArray: artistsApi.findArtist(this.$route.params.name).albums
    };
  },
  methods: {
    setIndex(amount) {
      this.index += amount;
      if(this.index === this.albumsArray.length) {
        this.index = 0;
      }
      else if(this.index < 0) {
        this.index = this.albumsArray.length - 1;
      }
    }
  }
};
</script>

<style>

</style>
