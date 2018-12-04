<template>
    <li>
        <RouterLink :to="`/albums/${album.id}`">{{album.title}}</RouterLink>
        : {{album.description}}
    </li>
</template>

<script>
export default {
    props: {
        album: Object
    }
};
</script>

<style>

</style>
