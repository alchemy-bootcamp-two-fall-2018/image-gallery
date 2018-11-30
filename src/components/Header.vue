<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/albums">Albums</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
</template>

<script>
export default {

};
</script>

<style>
    nav {
        display: flex;
        justify-content: space-around;
    }
</style>
