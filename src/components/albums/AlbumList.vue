<template>
  <ul>
    <Album 
      v-for="album in albums"
      :key="album.id"
      :album="album"/>
  </ul>
</template>

<script>
import Album from './Albums';
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
.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
}
.content {
  background: white;
  padding: 40px;
}

</style>