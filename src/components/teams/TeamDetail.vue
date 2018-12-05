<template>
    <section>
        <div>
            <AddPlayer :onAdd="handleAdd"/>
        </div>
        <nav>
            <RouterLink to="./thumbnail" class="spacing">Thumbnail</RouterLink>
            <RouterLink to="./listview" class="spacing">List</RouterLink>
            <RouterLink to="./gallery" class="spacing">Gallery</RouterLink>
        </nav>

        <h2>{{team.name}}</h2>
        <RouterView :players="team.players">DEFAULT VIEW</RouterView>

    </section>

</template>

<script>
import teamsApi from '../services/teamsApi.js';
import AddPlayer from './AddPlayer.vue';

export default {
    data() {
        return {
            team: null,
            showModal: false
        };
    },
    components: {
        AddPlayer
    },
    created() {
        this.team = teamsApi.getTeam(this.$route.params.id);
    },
    methods: {
        handleAdd(player) {
            teamsApi.addPlayer(this.team, player);
        }
    }
};
</script>

<style>

.content {
    background: white;
    padding: 40px;
}
.spacing { 
    margin-right: 10px; 
  } 
</style>