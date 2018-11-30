<template>
    <section v-if="album">
        <h2>{{album.name}}</h2>        
    <Thumbnails :images="album.image"/>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';
import Thumbnails from './Thumbnails';

export default {
    data() {
        return {
            album: null
        };
    },
    components: {
        Thumbnails
    },
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
    }

};
</script>

<style>

</style>
