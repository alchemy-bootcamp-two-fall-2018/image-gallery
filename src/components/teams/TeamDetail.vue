<template>
    <div>
        <h2>{{team.name}}</h2>
        <h3>{{team.players}}</h3>
        <Thumbnails :images="team.images"/>
    </div>

</template>

<script>
import teamsApi from '../services/teamsApi.js';
import Thumbnails from './Thumbnails';

export default {
    data() {
        return {
            team: null,
        };
    },
    components: {
        Thumbnails
    },
    created() {
        this.team = teamsApi.getTeam(this.$route.params.id);
    }
};
</script>

<style>

</style>
