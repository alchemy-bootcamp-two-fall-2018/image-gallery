<template>
    <ul>
        <li
        v-for="(player, index) in players"
        :key="index">
        <h4>{{player.lastName}}</h4>
        <p>
            <img :src="player.pic">    
        </p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        images: Array
    }
};
</script>

<style>

</style>
