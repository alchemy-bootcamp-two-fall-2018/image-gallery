<template>
 <section>
   <h2> {{album.title}}</h2>
   <Thumbnails :images="album.images"/>

  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import Thumbnails from '../Thumbnail';

export default {
  data() {
    return {
      album: null
    };
  },
  components: {
    Thumbnails,
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  }
  
};
</script>

<style>

</style>
