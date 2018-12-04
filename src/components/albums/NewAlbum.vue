<template>
  <form @submit.prevent="handleSubmit">
    Title: <input v-model="album.title" required>
    Description: <input v-model="album.description" required>
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
