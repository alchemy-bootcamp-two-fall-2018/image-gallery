<template>
  <ul>
    <Album 
      v-for="album in albums"
      v-bind:key="album.id"
      v-bind:album="album"/>
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
  ul {
    list-style-type: none;
    width: 90vw;
  }
  li {
    padding-bottom: 60px;
  }
  
</style>