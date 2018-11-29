<template>
    <section>
        <h2>Albums</h2>
    </section>
</template>

<script>
import albumsApi from '../services/albumsApi.js';
export default {
    data() {
        return {
            albums: albumsApi.getAlbums()
        };
    },
};
</script>

<style>

</style>
