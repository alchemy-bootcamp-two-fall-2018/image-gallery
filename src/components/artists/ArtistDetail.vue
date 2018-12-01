<template>
<div>
  <RouterLink to="./gallery">Gallery View</RouterLink>
  <RouterView :albums="albums">ROUTER-VIEW</RouterView>
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
