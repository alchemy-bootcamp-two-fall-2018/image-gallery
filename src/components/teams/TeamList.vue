<template>
    <ul>
        <Team
        v-for="team in teams"
        :key="team.id"
        :team="team"/>
    </ul>
</template>

<script>
import Team from './Team';

export default {
    props: {
        teams: Array
    },
    components: {
        Team
    }
};
</script>

<style>
ul {
    list-style: none;
}
img {
    max-height: 100px;
    width: auto;
}
</style>
