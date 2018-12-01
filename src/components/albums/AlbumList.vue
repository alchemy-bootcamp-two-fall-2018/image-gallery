<template>
<div>
      <p>Albums list</p>
      <p>
            <button @click="showModal = true">Add a new genre</button>
        </p>

        <div v-if="showModal" class="modal">
            <div class="content">
                <fieldset>
                    <legend> Add a new genre </legend>
                    Artist: <input type="text" name="artist" required>
                    Genre: <input type="text" name="genre"  required>
                    Image URL: <input type="text" name="url" required>
                    
                    
                    <input type="submit">
                    <button @click="showModal = false">Close</button>
                </fieldset>
            </div>
        </div>
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
        albums: Array,
        images: Array
    },
    components: {
        Album,
        
    },
    data(){
        return {
            showModal: false
        };
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
