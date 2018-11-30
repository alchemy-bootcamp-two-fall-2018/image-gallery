<template>
    <section>
        <h1>Albums</h1>
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
