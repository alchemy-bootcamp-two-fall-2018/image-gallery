<template>
    <div>
        <ul>
            <h3>Check out these Albums!</h3>
            <Album
            v-for="album in albums"
            :key="album.id"
            :album="album"
            />
        </ul>
    </div>
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

<style scoped>
li {
    list-style: none;
    font-size: 2em;
    text-transform: uppercase;
    padding: 10px;
    margin: auto;
}
h3 {
    font-size: 2.5em;
    color: black;
}

</style>
