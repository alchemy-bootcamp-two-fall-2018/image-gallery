<template>
    <li>
        {{album.type}}
        <img :src="album.images.url"/>
    </li>
</template>

<script>
export default {
    props: {
        album: Object
    }
}
</script>

<style>

</style>
