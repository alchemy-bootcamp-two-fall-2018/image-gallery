<template>
  <ul>
      <p>Albums list</p>
    <Album
      v-for="album in albums"
      :key="album.id"
      :album="album" />
  </ul>
</template>

<script>
import Album from './Album';

export default {
    props: {
        albums: Array
    },
    components: {
        Album
    }
};
</script>

<style>

</style>
