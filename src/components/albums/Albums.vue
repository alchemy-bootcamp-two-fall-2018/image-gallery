<template>
    <div>
        <h2>Image Albums</h2>
        <AlbumList :albums="albums"/>
    </div>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AlbumList from './AlbumList';

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
