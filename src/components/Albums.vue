<template>
    <section>
        <h2>Albums</h2>
        <AlbumList :albums="albums"/>
    </section>
</template>

<script>
import albumsApi from '../services/albumsApi.js';
import AlbumList from './AlbumsList';
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
