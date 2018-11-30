<template>
    <div v-if="album">
        <p>This is album detail</p>
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
        };
    },
    components: {
        Thumbnails
    },
    created() {
        this.album = albumApi.getThisAlbum(this.$route.params.id);
    }
};
</script>

<style>

</style>
