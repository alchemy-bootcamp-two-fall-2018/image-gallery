<template>
    <header>
        <h1>This is Christmas</h1>
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
        justify-content: space-around;
    }
    header {
        background: black;
        color: white;
        text-align: center;
        margin-top: 0px;
        border: 10px solid green;
        height: 150px;
    }
    h1 {
        margin-top: 0px;
        margin-bottom: 5px;
        padding: 10px;
        font-size: 4em;
        text-shadow: 2px 2px 2px lightgray;
        font-weight: 400;
    }
    span {
      text-decoration: none;
      color: red;
    }
</style>
