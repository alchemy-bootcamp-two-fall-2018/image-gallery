<template>
    <header>
        <h1>Natural Wonders Image Gallery</h1>
        <nav>
        <RouterLink class="home" to="/">Home</RouterLink>
        <RouterLink class="albums" to="/albums">Albums</RouterLink>
        <RouterLink class="about" to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {

};
</script>

<style>
h1 {
color:black;
font-size:2rem;
}
nav {
    display: flex;
    justify-content: space-around;
    opacity:0.9;
 
}
.home {
    color:black;
}
.albums {
    color:black;
}
</style>
