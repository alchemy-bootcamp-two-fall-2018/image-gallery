<template>
    <div>
        <h3>DinoList here</h3>
        <DinoItem
        v-for="album in albums"
        :key="album.id"
        :album="album"
        />
    </div>
</template>

<script>
import DinoItem from './DinoItem.vue';
export default {
    components: {
        DinoItem
    },
    props: {
        albums: Array
    }
}
</script>

<style>

</style>
