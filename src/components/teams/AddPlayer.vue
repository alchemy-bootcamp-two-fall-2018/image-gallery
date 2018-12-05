<template>
    <section>
        <form @submit.prevent="onAdd(player)">
            <label>
                <span>Last Name:</span>
                <input v-model="player.lastName" required>
            </label>
            <label>
                <span>Headshot:</span>
                <input v-model="player.url" required>
            </label>
            <button type="submit"> Add </button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            player: {
                lastName: '',
                url: ''
            }
        };
    },
    props: {
        team: Array,
        onAdd: Function
    }
};
</script>

<style>

</style>
