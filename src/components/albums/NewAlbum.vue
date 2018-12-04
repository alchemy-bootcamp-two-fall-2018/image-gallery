<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="album.title" required>
    <button>Add</button>
  </form>
</template>

<script>
import albumsApi from '../../services/albumsApi';
export default {
    data() {
        return {
            album: {
                title: ''
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

<style scoped>
    button {
        background-color: #FBCC34;
        height: 30px;
        width: 50px;
        border: 2px solid black;
        font-size: 18px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
</style>