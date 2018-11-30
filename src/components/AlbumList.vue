<template>
    <ul>
        <h3>DinoList here</h3>
        <Album
        v-for="album in albums"
        :key="album.id"
        :album="album"
        />
    </ul>
</template>

<script>
import Album from './Album.vue';
export default {
    components: {
        Album
    },
    props: {
        albums: Array
    }
};
</script>

<style>

</style>
