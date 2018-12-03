<template>
    <nav id="main">
        <RouterLink to="/"><strong>Home</strong></RouterLink>
        <RouterLink to="/albums"><strong>Albums</strong></RouterLink>
        <RouterLink to="/about"><strong>About</strong></RouterLink>
    </nav>
</template>

<script>
export default {

};
</script>

<style>
    #main {
        display: flex;
        justify-content: space-around;
        padding: 2vw;
        font-size: 32px;
        background-color: rgb(49,54,57);
    }
    #main a {
        text-decoration: none;
        color: white;
    }
</style>
