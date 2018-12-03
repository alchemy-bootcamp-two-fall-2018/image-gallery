<template>
    <div>
        <ul>
            <Album 
            v-for="album in albums"
            :key="album.id"
            :album="album"/>
        </ul>
    </div>
</template>

<script>
import Album from './Album.vue';

export default {
    props: {
        albums: Array
    },
    components: {
        Album
    }
};
</script>

<style>

</style>
