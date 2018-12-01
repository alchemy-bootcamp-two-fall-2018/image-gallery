<template>
    <section>
        <p>
            <button @click="showModal = true">Add players</button>
        </p>

        <div v-if="showModal" class="modal">
            <div class="content">
                I am the form
                <button @click="showModal = false">Close</button>
            </div>
        </div>
        <nav>
            <RouterLink to="./thumbnail">Thumbnail</RouterLink>
            <RouterLink to="./listview">List</RouterLink>
        </nav>
        <RouterView :teams="team.players">DEFAULT VIEW</RouterView>
        <RouterView :team=""
        
        <h2>{{team.name}}</h2>
        <!-- <Thumbnails :players="team.players"/> -->
    </section>

</template>

<script>
import teamsApi from '../services/teamsApi.js';
// import Thumbnails from './Thumbnails';

export default {
    data() {
        return {
            team: null,
            showModal: false
        };
    },
    // components: {
    //     Thumbnails
    // },
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

</style>