<template>
    <li>
        <RouterLink class="albums" :to="`/albums/${album.id}`"> {{album.name}} </RouterLink>
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
.albums {
    color:grey;
    font-size: 1.2rem;
}

</style>
