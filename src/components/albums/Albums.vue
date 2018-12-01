<template>
    <section>
        <h2>Albums</h2>
        <AlbumsList :albums="albums"/>
        <RouterLink to="/albums/new">Add a new Album </RouterLink>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';
import AlbumsList from './AlbumsList.vue';

export default {
    data() {
        return {
            albums: albumsApi.getAlbums()
        };
    },
    components: {
        AlbumsList
    }
};
</script>

<style>

</style>
