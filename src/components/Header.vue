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
color:grey;
opacity: 0.8;
font-size:2rem;
}
nav {
    display: flex;
    justify-content: space-around;
    opacity:0.9; 
    opacity: 0.8;
}
.home {
    color:gray;
    text-decoration: none;
}
.albums {
    color:gray;
    text-decoration: none;
}
.about {
    color:rgb(126, 121, 121);
    text-decoration: none;
}
</style>
