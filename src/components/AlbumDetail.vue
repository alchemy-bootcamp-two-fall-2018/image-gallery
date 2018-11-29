<template>
    <section>
        <h2>I am Album Detail</h2>
    </section>
</template>

<script>
import albumApi from '../services/albumsApi.js';
import Thumbnails from './Thumbnails.vue';
export default {
    data() {
        return {
            album: null,
        }
    },
    components: {
        Thumbnails
    }
    
}
</script>

<style>

</style>
