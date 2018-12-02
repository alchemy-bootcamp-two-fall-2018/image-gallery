<template>
    <li>
        <RouterLink :to="`/teams/${team.id}`">
            <img :src="team.logo">
            <!-- {{team.name}} -->
        </RouterLink>
    </li>
</template>

<script>

export default {
    props: {
        team: Object
    }
};
</script>

<style>

</style>
