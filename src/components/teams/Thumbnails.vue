<template>
    <ul>
        <li
        v-for="(player, index) in players"
        :key="index">
        <h4>{{player.lastName}}</h4>
        <p>
            <img :src="player.url">    
        </p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        players: Array
    }
};
</script>

<style>

</style>
