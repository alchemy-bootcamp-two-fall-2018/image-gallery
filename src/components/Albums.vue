<template>
    <div>
        <h2>This is Dinos</h2>
        <AlbumList
        :albums="albums"
        />
    </div>
</template>

<script>
import AlbumList from './AlbumList.vue';
import albumApi from '../helper/albumApi.js';

export default {
    data() {
        return {
            albums: albumApi.getAlbums()
        };
    },
    components: {
        AlbumList
    }
};
</script>

<style>

</style>
