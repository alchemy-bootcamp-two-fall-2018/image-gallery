<template>
    <header class="main">
        <h1 class="title">This is Christmas</h1>
        <nav>
            <RouterLink to="/"><span>Home</span></RouterLink>
            <RouterLink to="/albums"><span>Albums</span></RouterLink>
            <RouterLink to="/about"><span>About</span></RouterLink>
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
        justify-content: space-evenly;
        width: 100%;
    }
    .main {
        background: black;
        color: white;
        text-align: center;
        margin-top: 0px;
        border: 10px solid green;
        height: 25vh;
    }
    h1 {
        margin-top: 0px;
        margin-bottom: 5px;
        padding: 10px;
        font-size: 4em;
        text-shadow: 2px 2px 2px lightgray;
        font-weight: 400;
    }
    .title {
        font-size: 5em;
    }
    nav span {
      text-decoration: none;
      color: red;
      background: white;
      padding: 5px;
      width: 28vw;
      border: 2px solid black;
    }
</style>
