<template>
    <li>
        <RouterLink :to="`/teams/${team.id}`">{{team.name}}</RouterLink>
        <!-- <TeamDetail/> -->
    </li>
</template>

<script>
// import TeamDetail from './TeamDetail';
export default {
    props: {
        team: Object
    },
    // components: {
    //     TeamDetail
    // }
};
</script>

<style>

</style>
