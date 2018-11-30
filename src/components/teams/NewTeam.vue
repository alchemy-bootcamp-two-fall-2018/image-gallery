<template>
    <section> 
        <form @submit.prevent="handleSubmit">
            <label>
                <span>Team:</span>
                <input v-model="team.name" required>    
            </label>
            <label>
                <span>Logo:</span>
                <input v-model="team.logo" required>    
            </label>
            <label>
                <span>Players:</span>
                <input v-model="team.players" required>    
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
            team: {
                name: '',
                players: {
                    lastName: '',
                    url: ''
                }
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
