<template>
    <div v-if="album">
        <Modal  class="modal" v-if="showModal">
                <form @submit.prevent="onAdd" @reset="onCancel">
                    <label>
                        Title: <input v-model="image.title" type="text" required>
                    </label>
                    <label>
                        Image URL: <input v-model="image.url" type="url" required>
                    </label>
                    <label>
                        Image Description: <input v-model="image.description" type="text" required>
                    </label>
                    <button type="submit">Submit</button>
                    <button type="reset">Cancel</button>
                </form>
        </Modal>
        <button @click="showModal = true" id="add-image">Add an image</button>
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

<style scoped>
nav {
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
}
button:hover {
    font-weight: bold;
}
#add-image {
    padding: 10px;
    margin: 10px;;
    font-size: 16px;
    height: 50px;
}
label {
    display: block;
    margin: 10px;
    font-size: 16px;
    text-transform: uppercase;
    text-align: left;
}
input {
    margin: 10px;
    padding: 5px;
    font-size: 14px;
}
form button {
    margin: 10px;
    text-transform: uppercase;
    width: 100px;
    font-size: 14px;
}

</style>
