<template>
  <section>
    <h3>Song List:</h3>
    <ul>
      <li v-for="album in albums"
          :key="album.title"
          @click="blah">{{album.songs}}
      </li>  
    </ul>
  </section>
</template>

<script>

import artistsApi from '../../../services/artistsApi';

export default {
  props: {
    albums: Array
  },
  methods: {
    blah() {
      console.log(this.$route.params.title);
      console.log(artistsApi.findAlbum(this.$route.params.title));
    }
  }
};
</script>

<style>

</style>
