<template>
  <section>
    <h3>Song List:</h3>
    <ul>
      <li v-for="(song, index) in songs"
          :key="index">{{song}}
      </li>  
    </ul>
  </section>
</template>

<script>

import artistsApi from '../../../services/artistsApi';

export default {
  data() {
    return {
      songs: artistsApi.findAlbum(this.$route.params.title).songs
    };
  }
};
</script>

<style>
li {
  list-style: none;
  /* text-align: left; */
}
</style>
