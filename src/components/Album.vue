<template>
    <li>
        <RouterLink :to="`/${album.id}`">{{album.type}}</RouterLink>
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
