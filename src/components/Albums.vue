<template>
    <section>
        <h1>Albums</h1>
        <NewAlbum/>
        <AlbumList :albums="albums"/>
    </section>
</template>

<script>
import albumsApi from '../services/albumsApi.js';
import AlbumList from './AlbumsList';
import NewAlbum from './NewAlbum';
export default {
    data() {
        return {
            albums: albumsApi.getAlbums()
        };
    },
    components: {
        AlbumList,
        NewAlbum
    }
};
</script>

<style>

</style>
