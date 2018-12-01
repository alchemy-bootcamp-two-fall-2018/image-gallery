<template>
    <div>
        <p>Albums list</p>
        <p>
            <button @click="showModal = true">Add a new genre</button>
        </p>

        <div v-if="showModal" class="modal">
            <div class="content">
                <form @submit="handleAdd()">
                    <fieldset>
                        <legend> Add a new genre </legend>
                        Genre: <input type="text" name="genre"  v-model="category.genre" required>
                        <button type="submit">Add</button>
                    </fieldset>
                </form>
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
    data(){
        return {
            showModal: false,
            category: {
                id: '',
                genre: '',
                images: []
            }
        };
    },
    props: {
        albums: Array,
        images: Array
    },
    components: {
        Album,
        
    },
    methods: {
        handleAdd() {
            this.category.id = this.category.genre.toLowerCase();
            console.log(this.category);
            this.albums.push(this.category);
        }
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
