<template>
  <section>
    <AddRecord :onAdd="handleAdd"></AddRecord>
    <EditArtist :onUpdateArt="handleUpdateArt"></EditArtist>
    <ul>
      <li class="content"
      v-for="album in albums"
      :key="album.title">
      <RouterLink :to="`./song-list/${album.title}`"><img :src="album.imgUrl"><p>{{album.title}}</p></RouterLink>
      </li>
    </ul>
  </section>
</template>

<script>
import artistsApi from '../../../services/artistsApi';
import AddRecord from './AddRecord';
import EditArtist from './EditArtist';

export default {
  props: {
    albums: Array
  },
  components: {
    AddRecord,
    EditArtist
  },
  methods: {
    handleAdd(newRecord) {
      artistsApi.addRecord(newRecord, artistsApi.findArtist(this.$route.params.name).albums);
    },
    handleUpdateArt(updateArtist) {
      console.log(updateArtist);
    }
  }
};
</script>

<style>

</style>
