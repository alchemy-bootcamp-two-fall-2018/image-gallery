<template>
  <section>
    <h2>Albums Vue</h2>
    <AlbumList :albums="albums"/>
  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';

export default {
    data() {
        return {
            albums: albumsApi.getAlbums()
        };
    },
    components: {
        AlbumList
    }
};
</script>

<style>

</style>
