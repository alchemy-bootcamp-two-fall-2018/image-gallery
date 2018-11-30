<template>
    <section>
        Add new Team 
        <form>
            <input v-model="team.name">
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            team: {
                name: ''
            }
        };
    },
    components: {

    }
};
</script>

<style>

</style>
