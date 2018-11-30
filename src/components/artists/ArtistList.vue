<template>
    <u>
        <Artist v-for="artist in artists"
            :key="artist.name"
            :artist="artist"/>
    </u>
</template>

<script>

import Artist from './Artist';

export default {
  props: {
    artists: Array
  },
  components: {
    Artist
  }
};
</script>

<style>

</style>
