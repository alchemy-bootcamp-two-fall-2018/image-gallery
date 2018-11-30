<template>
  <li>
    <RouterLink :to="`/albums/${album.id}`">{{album.genre}}</RouterLink>
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
  li{
    border: 1px solid gold;
  }
</style>
