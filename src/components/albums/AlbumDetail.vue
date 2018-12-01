<template>
    <section v-if="album">
        <h2>{{album.name}}</h2>
        <p>
            <button @click="showModal = true"> Add a new Image
            </button>
        </p>       
        <Modal v-if="showModal" :onClose="() => showModal = false">
            <AddImage :onAdd="handleImageAdd"/>
        </Modal>
        <nav>
            <RouterLink to="./thumbnail"> Thumbnail View </RouterLink>
            <RouterLink to="./list"> List View </RouterLink>
            <RouterLink to="./gallery"> Gallery View </RouterLink>

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
        }
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
h2 {
    color:dimgray;
    background-color:white;
    padding:5px;
    margin:10px;
}

</style>