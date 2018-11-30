<template>
    <section>
        Add new Team 
        <form @submit.prevent="handleSubmit">
            <input v-model="team.name">
            <button> Add </button>
        </form>
    </section>
</template>

<script>
import teamsApi from '../services/teamsApi';
export default {
    data() {
        return {
            team: {
                name: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            const saved = teamsApi.add(this.team);
            this.$router.push(`/teams/${saved.id}`);
        }
    } 
};
</script>

<style>

</style>
