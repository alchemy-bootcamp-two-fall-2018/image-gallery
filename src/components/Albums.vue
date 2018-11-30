<template>
    <div>
        <h2>This is Albums</h2>
        <button @click="showModal = true">Add Album</button>
        <AlbumList
        :albums="albums"
        />
        <div class="modal" v-if="showModal">
            <span class="content">
            <form @submit.prevent="onAdd" @reset="onCancel">
                    <label>
                        Type: <input v-model="album.type" type="text" required>
                    </label>
                    <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
                </form>
            </span>
        </div>
    </div>
</template>

<script>
import AlbumList from './AlbumList.vue';
import albumApi from '../helper/albumApi.js';

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
