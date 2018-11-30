<template>
<div>
      <p>Albums list</p>
  <ul>
    <Album
      v-for="album in albums"
      :key="album.id"
      :album="album" />
  </ul>
</div>
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

<style scoped>
    ul{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            list-style-type: none;
            margin: 0;
            padding: 0;
            max-height: 75vh;
            overflow-y: auto;
          
    }
</style>
