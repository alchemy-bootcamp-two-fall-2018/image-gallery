<template>
    <section v-if="album">
        <h2>{{album.name}}</h2>        
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';

export default {
    data() {
        return {
            album: null
        };
    },
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
    }

};
</script>

<style>

</style>
