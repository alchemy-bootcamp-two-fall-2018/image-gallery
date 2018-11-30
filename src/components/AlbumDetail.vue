<template>
    <div v-if="album">
        <button @click="showModal = true">Add image</button>
        <div class="modal" v-if="showModal">
            <span class="content">
            <form @submit.prevent="onAdd">
                <label>
                    Title: <input v-model="image.title" type="text" required>
                </label>
                <label>
                    Image URL: <input v-model="image.url" type="text" required>
                </label>
                <button type="submit" @click="showModal = false">Submit</button>
            </form>
            <button @click="showModal = false">Cancel</button>
            </span>
        </div>

        <Thumbnails
        :images="album.images"
        />
    </div>
</template>

<script>
import Thumbnails from './Thumbnails';
import albumApi from '../helper/albumApi';
export default {
    data() {
        return {
            album: null,
            showModal: false,
            image: {}
        };
    },
    components: {
        Thumbnails
    },
    created() {
        this.album = albumApi.getThisAlbum(this.$route.params.id);
    },
    methods: {
        onAdd() {
            this.album.images.push(this.image);
            console.log(this.album);
            this.image = {};
        }
    }
};
</script>

<style>
.modal {
   background-color: rgba(0,0,0,.5);
   height: 100%;
   width: 100%;
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0; 
}
.content{
    background: white;
    padding: 40px;
}
</style>
