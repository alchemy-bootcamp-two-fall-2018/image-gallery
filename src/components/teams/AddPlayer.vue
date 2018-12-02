<template>
    <form @submit.prevent="onAdd(player)">
        <FormControl label="lastName">
            <input v-model="player.lastName" required>
        </FormControl>
        <FormControl label="Url">
            <input v-model="player.url" required>
        </FormControl>
        <FormControl>
            <button>Add</button>
        </FormControl>
    </form>
</template>

<script>
import FormControl from '../shared/FormControl';

export default {
    data() {
        return {
            player: {
                lastName: '',
                url: ''
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
