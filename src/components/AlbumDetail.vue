<template>
    <div v-if="album">
        <button @click="showModal = true">Add image</button>
        <Modal  class="modal" v-if="showModal">
                <form @submit.prevent="onAdd" @reset="onCancel">
                    <label>
                        Title: <input v-model="image.title" type="text" required>
                    </label>
                    <label>
                        Image URL: <input v-model="image.url" type="url" required>
                    </label>
                    <button type="submit">Submit</button>
                    <button type="reset">Cancel</button>
                </form>
        </Modal>
        <nav>
        <RouterLink to="./thumbnail">Thumbnails</RouterLink>
        <RouterLink to="./gallery">Gallery</RouterLink>
        <RouterLink to="./list">List</RouterLink>
        </nav>
        <RouterView :images="album.images"></RouterView>
    </div>
</template>

<script>
import Modal from './shared/Modal';
import albumApi from '../helper/albumApi';
export default {
    components: {
        Modal
    },
    data() {
        return {
            album: null,
            showModal: false,
            image: {}
        };
    },
    created() {
        this.album = albumApi.getThisAlbum(this.$route.params.id);
    },
    methods: {
        onAdd() {
            albumApi.addImage(this.album.id, this.image);
            this.onCancel();
        },
        onCancel() {
            this.image = {};
            this.showModal = false;
        }
    }
};
</script>

<style>

</style>
