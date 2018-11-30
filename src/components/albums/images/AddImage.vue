<template>
    <form @sumbit.prevent="onAdd(image)">
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
                name: '', 
                picutre: ''
            }
        };
    },
    props: {
        onAdd: Function
    }, 
    components: {
        FormControl
    }
};
</script>

<style>

</style>
