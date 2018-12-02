<template>
    <header class="main">
        <h1 class="title">This is Christmas</h1>
        <nav>
            <RouterLink class="nav" to="/"><span>Home</span></RouterLink>
            <RouterLink class="nav" to="/albums"><span>Albums</span></RouterLink>
            <RouterLink class="nav" to="/about"><span>About</span></RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
};
</script>

<style scoped>
  .main {
    background: black;
    color: white;
    text-align: center;
    margin-top: 0px;
    border: 10px solid green;
  }
  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 5rem;
    text-shadow: 2px 2px 2px lightgray;
    font-weight: 400;
    line-height: 0.8;
  }
  nav span {
    text-decoration: none;
    color: red;
    background: white;
    border-top: 2px solid gray;
    border-right: 2px solid gray;
    padding: 6px;
    background-color: white;
    line-height: 2.5em;
    border-radius: 5px;
  }
  .nav {
    margin: 0px 10px;
    text-decoration: none;
    text-align: center;
  }
</style>