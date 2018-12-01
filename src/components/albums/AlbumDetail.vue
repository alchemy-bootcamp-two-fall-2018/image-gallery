<template>
    <section v-if="album">
        <h2>{{album.title}}</h2>
        <h3>Images</h3>
        <nav>
            <RouterLink to="./thumbnail">Thumbnail View</RouterLink>
            <RouterLink to="./genrelist">List View</RouterLink>
            <RouterLink to="./gallery">Gallery View</RouterLink>
        </nav>
        
        
        <RouterView :images="album.images"/>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';


export default {
    data() {
        return {
            album: null,

        };
    },

    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
    }
};

</script>

<style>

</style>
