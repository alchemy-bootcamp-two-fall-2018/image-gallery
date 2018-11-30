<template>
    <div>
        
        This is the Teams component
        <TeamList :teams="teams"/>
    </div>
</template>

<script>
import teamsApi from '../services/teamsApi';
import TeamList from './TeamList';

export default {
    data() {
        return {
            teams: teamsApi.getTeams()
        };
    },
    components: {
        TeamList
    }
};
</script>

<style>

</style>
