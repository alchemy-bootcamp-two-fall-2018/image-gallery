<template>
<form @submit.prevent="handleSubmit">
    <label>Album Name
        <input v-model="album.name" required>
    </label>
    <label> Photos
        <input v-model="album.image" required>
    </label>
    <button>Add</button>
</form>
</template>

<script>
import albumsApi from '../../services/albumsApi.js';

export default {
    data() {
        return {
            album: {
                name: '',
                image: []
            } 
        };
    },
    methods: {
        handleSubmit() {
            const saved = albumsApi.add(this.album);
            this.$router.push(`/albums/${saved.id}`);
        }
    }
};
</script>

<style>

</style>
