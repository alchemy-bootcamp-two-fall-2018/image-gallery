<template>
    <div>
        <h2>{{team.name}}</h2>
        <Thumbnails :players="team.players"/>
        <div class="modal">
            <button class="close" @click="onClose">X</button>
        </div>
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
