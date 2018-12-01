<template>
    <section v-if="album">
        <h2>{{album.genre}}</h2>
        
        <nav>
            <RouterLink to="./thumbnail">Thumbnail View</RouterLink>
            <RouterLink to="./genrelist">List View</RouterLink>
            <RouterLink to="./gallery">Gallery View</RouterLink>
        </nav>
        
        <div>
            <p>
                <button @click="showModal = true">Add a new image</button>
            </p>

            <div v-if="showModal" class="modal">
                <div class="content">
                    <form @submit="handleAdd()">
                        <fieldset>
                            <legend> Add a new image </legend>
                            Image: <input type="text" name="image" v-model="category.image" required>
                            <button type="submit">Add</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

        <RouterView :images="album.images"/>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';


export default {
    data() {
        return {
            album: null,
            showModal: false,
            category: {
                
                url: ''
            }

        };
    },

    props: {
        albums: Array,
        images: Array
    },

    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
        if(!this.album) {
            this.$router.push('/albums');
        }
    },

    methods: {
        handleAdd() {
            // this.category.id - this.category.image;
            // console.log('image', this.images.url);
            this.albums.push(this.url);
        }
    }

};

</script>

<style>

</style>
