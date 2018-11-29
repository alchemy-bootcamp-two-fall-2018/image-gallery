<template>
    <div>
        <h2>This is Dinos</h2>
        <DinoList
        :albums="albums"
        />
    </div>
</template>

<script>
import DinoList from './DinoList.vue';
import dinoApi from '../helper/dinoApi.js';

export default {
    data() {
        return {
            albums: dinoApi.getAlbums()
        }
    },
    components: {
        DinoList
    }
}
</script>

<style>

</style>
