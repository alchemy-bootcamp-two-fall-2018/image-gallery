<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/artists">Artists</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {

};
</script>

<style>
nav {
    display: flex;
    justify-content: space-around;
    background-color: rgb(130, 130, 202);
}

nav a {
    color: rgb(227, 231, 238);
    text-decoration: none;
}
</style>
