<template>
    <section v-if="album">
        <h2>{{album.name}}</h2>  
        <p>
            <label> Photos
                <input v-model="" required>
            </label>
            <button>Add</button>    
        </p>      
    <Thumbnails :images="album.image"/>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';
import Thumbnails from './Thumbnails';

export default {
    data() {
        return {
            album: null,
            image: []
        };
    },
    components: {
        Thumbnails
    },
    method: {
        handleAdd() {
            this.album.images.push(this.image);
        }

    },
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
    }

};
</script>

<style>

</style>
