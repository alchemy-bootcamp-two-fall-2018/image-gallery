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

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  
}

li {
    position: relative;
    
    border: 1px solid black;
    margin: 5px;
}
img {
    width: 200px;

    


}


</style>
