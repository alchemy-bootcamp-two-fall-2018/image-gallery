<template>
    <section>
        <div>
            <AddPlayer/>
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
    }
};
</script>

<style>

.modal {
    position: fixed;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
}
.content {
    background: white;
    padding: 40px;
}
.spacing { 
    margin-right: 10px; 
  } 
</style>