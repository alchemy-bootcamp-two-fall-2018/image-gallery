<template>
<section>
    <div id="album-list">
        <AlbumList
        :albums="albums"
        />
        <button @click="showModal = true" id="add-album">Add Your Own Album</button>
    </div>
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
</section>
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

<style scoped>
#add-album {
    padding: 20px;
    margin: auto;
    font-size: 16px;
}
button:hover {
    font-weight: bold;
}
label {
    display: block;
    margin: 10px;
    font-size: 16px;
    text-transform: uppercase;
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
section {
    background-image: url('https://img1.akspic.com/image/22079-mountain-dinosaur-hill-landscape-1920x1080.jpg');
    height: 100vh;
}
#album-list {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    margin: auto;
    width: 50vw;
    text-align: center;
}
</style>
