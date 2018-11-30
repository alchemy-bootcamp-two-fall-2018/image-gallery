<template>
    <form @sumbit.prevent="handleAdd()">
        <FormControl label="name">
            <input v-model="image.name" required>
        </FormControl>
        <FormControl label="picture">
            <input v-model="image.picture" required>
        </FormControl>
        <FormControl>
            <button>Add</button>
        </FormControl>
    </form>
</template>


<script>
import FormControl from '../../shared/FormControl';

export default {
    data() {
        return {
            image: {
                picture: ''
            }
        };
    },
    props: {
        onAdd: Function
    }, 
    components: {
        FormControl
    },
    methods : {
        handleAdd() {
            console.log('new image', this.album.image);
            this.album.image.push(this.image);
            this.image = {};
        
        }
    }
};
</script>

<style>

</style>
