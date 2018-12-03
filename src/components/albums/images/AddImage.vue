<template>
    <form @submit.prevent="onAdd(image)">
        <FormControl class="labels" label="name">
            <input v-model="image.name" required>
        </FormControl>
        <FormControl class="labels" label="picture">
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
                name: '',
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
};
</script>

<style>
.labels {
    color:white;
}

</style>
