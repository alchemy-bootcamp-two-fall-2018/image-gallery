<template>
    <section>
        <h2>Albums</h2>
        <AlbumsList class="albums" :albums="albums"/>
        <RouterLink class="add-album" to="/albums/new">Add a new Album </RouterLink>
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
h2 {
    color: white;
    font-size:2rem;
}
.albums {
    color:white;
    text-decoration: none;
}
.add-album {
    color:white;
    text-decoration: none;
    font-size:1.2rem;
    background-color:grey;
    opacity: 0.8;
    padding:5px;
    }
</style>
