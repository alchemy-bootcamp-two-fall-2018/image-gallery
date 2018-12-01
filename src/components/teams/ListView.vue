<template>
    <section>
        <h3>List View</h3>
        <ul>
            <li
            v-for="(player, index) in players"
            :key="index">
            <h4>{{player.lastName}}</h4>
            <img :src="player.url">    
            </li>
        </ul>
    </section>
</template>

<script>
export default {

};
</script>

<style>

</style>
