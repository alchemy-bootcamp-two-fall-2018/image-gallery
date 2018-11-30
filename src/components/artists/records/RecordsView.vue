<template>
    <section>
        <ul>
            <li 
            v-for="album in albums"
            :key="album.title">
            <!-- <RouterLink to="./song-list">HELLO<img :src="album.imgUrl"></RouterLink> -->
            <img :src="album.imgUrl">
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  props: {
    albums: Array
  }
};
</script>

<style>

</style>
