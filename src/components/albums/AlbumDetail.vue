<template>
    <section v-if="album">
        <h2>{{album.title}}</h2>
        <h3>Images</h3>
        <p>
            <button @click="showModal = true">Add a new Image</button>
        </p>

        <div v-if="showModal" class="modal">
            <div class="content">
                I am the form. May the form be with you.
                <button @click="showModal = false">Close</button>
            </div>
        </div>
        
        <Thumbnails :images="album.images"/>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import Thumbnails from './Thumbnails';

export default {
    data() {
        return {
            album: null,
            showModal: false

        };
    },

    components: {
        Thumbnails
    },

    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
    }
};

</script>

<style>

</style>
