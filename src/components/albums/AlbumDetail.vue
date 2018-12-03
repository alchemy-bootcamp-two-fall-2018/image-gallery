<template>
    <section class="album-name" v-if="album">
        <h2>{{album.name}}</h2>
        <p>
            <button @click="showModal = true"> Add a new Image
            </button>
        </p>       
        <Modal v-if="showModal" :onClose="() => showModal = false">
            <AddImage :onAdd="handleImageAdd"/>
        </Modal>
        <nav>
            <RouterLink class="thumb" to="./thumbnail"> Thumbnail View </RouterLink>
            <RouterLink class="list" to="./list"> List View </RouterLink>
            <RouterLink class="gallery"  to="./gallery"> Gallery View </RouterLink>

        </nav>
        <RouterView :images="album.image"> Default View </RouterView>
    </section>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';
import Modal from '../shared/Modal.vue';
import AddImage from './images/AddImage.vue';

export default {
    data() {
        return {
            album: null,
            showModal: false
        };
    },
    components: {
        Modal,
        AddImage
    },
    methods: {
        handleImageAdd(image) {

            this.album.image.push(image);
        }, 
    },
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
        if(!this.album) {
            this.$router.push('/albums');
        }
    }
};
</script>

<style>
.thumb {
    color:grey;
    text-decoration: none;
}
.list {
    color:grey;
    text-decoration: none;
}
.gallery {
    color:grey;
    text-decoration: none;
}
h2 {
    color: white;
    padding:5px;
    margin:10px;
}

</style>