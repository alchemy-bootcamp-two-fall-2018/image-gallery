<template>
    <section v-if="album">
        <h2>{{album.title}}</h2>
        <h3>Images</h3>
        
        
        <RouterView :images="album.images"/>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';


export default {
    data() {
        return {
            album: null,
            showModal: false

        };
    },



    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
    }
};

</script>

<style>

</style>
