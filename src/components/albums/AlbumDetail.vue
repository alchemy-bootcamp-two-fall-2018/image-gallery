<template>
    <section v-if="album">
        <h2>{{album.name}}</h2>  
            <form @submit.prevent="handleAdd">
                <label> Photos
                    <input v-model="image.picture" required
                    />
                </label>
                <button>Add</button> 
            </form>       
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
            image: {
                picture: ''
            }
        };
    },
    components: {
        Thumbnails
    },
    methods: {
        handleAdd() {
            console.log('new image', this.album.image);
            this.album.image.push(this.image);
            this.image = {};
        
        }

    },
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
    }

};
</script>

<style>

</style>
