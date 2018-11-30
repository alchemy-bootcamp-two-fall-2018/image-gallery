<template>
    <section>
        <h2>Artists</h2>
        <ArtistList :artists="artists"/>
    </section>
</template>

<script>

import artistsApi from '../../services/artistsApi';
import ArtistList from './ArtistList';

export default {
  data() {
    return {
      artists: artistsApi.getAll()
    };
  },
  components: {
    ArtistList
  }
};
</script>

<style>
img {
    width: 100px;
}
</style>
