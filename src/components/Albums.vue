<template>
    <section>
        <h1 class="title">Albums</h1>
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
    .title {
        padding-top: 20px;
        padding-bottom: 40px;
    }
    section {
        background-color: #FBCC34;
        height: 100vh; 
    }
</style>
