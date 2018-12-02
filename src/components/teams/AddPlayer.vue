<template>
    <section>
        <form @submit.prevent="handleSubmit">
            <label>
                <span>Last Name:</span>
                <input v-model="players.lastName" required>
            </label>
            <label>
                <span>Headshot:</span>
                <input v-model="players.url" required>
            </label>
            <button type="submit"> Add </button>
        </form>
    </section>
</template>

<script>
import teamsApi from '../services/teamsApi';
export default {
    data() {
        return {
            players: {
                lastName: '',
                url: ''
            }
        };
    },
    props: {
        team: Array,
    },
    methods: {
        handleSubmit() {
            const saved = teamsApi.add(this.player);
            console.log(saved);
            // return teamsApi;
        }
    }
};
</script>

<style>

</style>
