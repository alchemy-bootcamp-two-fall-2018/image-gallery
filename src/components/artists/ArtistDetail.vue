<template>
<div>
  <ul>
    <li 
      v-for="album in albums"
      :key="album.title">
      <!-- <RouterLink to="./song-list">HELLO<img :src="album.imgUrl"></RouterLink> -->
      <img :src="album.imgUrl">
    </li>
  </ul>
  <RouterView>ROUTER-VIEW</RouterView>
</div>

</template>

<script>

import artistsApi from '../../services/artistsApi';

export default {
  data() {
    return {
      albums: artistsApi.findArtist(this.$route.params.name)
    };
  }
};
</script>

<style>

</style>
