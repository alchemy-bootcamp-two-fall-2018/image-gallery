<template>
  <section>
    <EditRecord :onUpdateRec="handleUpdateRec"></EditRecord>
    <h3>Song List:</h3>
    <ul>
      <li v-for="(song, index) in songs"
          :key="index">{{song}}
      </li>  
    </ul>
  </section>
</template>

<script>

import artistsApi from '../../../services/artistsApi';
import EditRecord from './EditRecord';

export default {
  data() {
    return {
      songs: artistsApi.findAlbum(this.$route.params.title).songs
    };
  },
  components: {
    EditRecord
  },
  methods: {
    handleUpdateRec(updateRec) {
      artistsApi.updateRec(updateRec, artistsApi.findAlbum(this.$route.params.title));
    }
  }
};
</script>

<style>
body {
  background-color: green;
}
li {
  list-style: none;
  /* text-align: left; */
}
</style>
