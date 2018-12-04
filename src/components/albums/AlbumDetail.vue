<template>
    <section v-if="album">
        <h1 class="detail-title">{{album.title}}</h1>
        <p class="description">{{album.description}}</p>
        <p class="button">
            <button @click="showModal = true" class="image-add">Add a new Image</button>
        </p>
        <div v-if="showModal" class="modal">
            <div class="content">
                <form @submit.prevent="handleAdd">
                    <label>
                        Title:
                        <input v-model="image.title" required>
                    </label>
                    <label>
                        Image Url:
                        <input v-model="image.url" required>
                    </label>
                    <label>
                        Description:
                        <input v-model="image.description" required>
                    </label>
                    <button type="submit">Add</button>
                </form>
            <button @click="onCancel" class="cancel">X</button>
            </div>
        </div>
        <nav>
            <RouterLink to="./thumbnail">Thumbnail</RouterLink>
            <RouterLink to="./list">List</RouterLink>
            <RouterLink to="./gallery">Gallery</RouterLink>
        </nav>

    <RouterView :images="album.images">DEFAULT VIEW</RouterView>
    </section>
</template>

<script>
import albumApi from '../../services/albumsApi.js';
export default {
    data() {
        return {
            album: null,
            showModal: false,
            image: {}
        };
    },
    components: {},
    created() {
        this.album = albumApi.getAlbum(this.$route.params.id);
    },
    methods: {
        handleAdd() {
            albumApi.addImage(this.album, this.image);
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
.modal {
    position: fixed;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
}
.content {
    background: white;
    padding: 40px;
    position: relative;
}
h2, h3 {
    text-align: center;
}
form { 
    display: flex;
    justify-content: center;
    align-items: center;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
}
.cancel {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
}
input {
    margin: 10px;
}
.image-add {
    background-color: #FBCC34;
    height: 30px;
    width: 150px;
    border: 2px solid black;
    font-size: 18px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.detail-title {
    padding: 20px;
}
.description {
    text-align: center;
    padding: 20px;
}
</style>
