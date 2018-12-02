<template>
  <section>
    <h3>Song List:</h3>
    <ul>
      <li v-for="album in albums"
          :key="album.title">{{album.songs}}
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
