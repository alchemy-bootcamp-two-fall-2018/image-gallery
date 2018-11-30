<template>
<div>
  <ul>
    <li v-for="album in albums"
        :key="album.title"><img :src="album.imgUrl"></li>
  </ul>
</div>

</template>

<script>

import artistsApi from '../../services/artistsApi';

export default {
  data() {
    return {
      albums: artistsApi.findArtist()
    };
  }
};
</script>

<style>

</style>
