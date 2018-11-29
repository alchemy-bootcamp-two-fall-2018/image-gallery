<template>
    <section v-if="album">
        <h2>{{album.title}}</h2>
        <h3>Images</h3>
        
        <Thumbnails :images="album.images"/>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import Thumbnails from './Thumbnails';

export default {
    data() {
        return {
            album: null,

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
