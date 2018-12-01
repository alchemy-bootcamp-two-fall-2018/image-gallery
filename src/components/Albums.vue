<template>
    <div>
        <h2>This is Albums</h2>
        <button @click="showModal = true">Add Album</button>
        <AlbumList
        :albums="albums"
        />
        <Modal v-if="showModal">
            <form @submit.prevent="onAdd" @reset="onCancel">
                    <label>
                        Title: <input v-model="album.type" type="text" required>
                    </label>
                    <label>
                        Description: <input v-model="album.description" type="text" required>
                    </label>
                    <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
                </form>
        </Modal>
    </div>
</template>

<script>
import AlbumList from './AlbumList.vue';
import albumApi from '../helper/albumApi.js';
import Modal from './shared/Modal';

export default {
    data() {
        return {
            albums: albumApi.getAlbums(),
            showModal: false,
            album: {}
        };
    },
    components: {
        AlbumList,
        Modal
    },
    methods: {
        onAdd() {
            albumApi.add(this.album);
            this.onCancel();
            console.log('clicked');
        },
        onCancel() {
            this.album = {};
            this.showModal = false;
        }
    }
};
</script>

<style>

</style>
