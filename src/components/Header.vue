<template>
  <header>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
    <nav>
      <RouterLink to="/">Home</RouterLink> 
      <RouterLink to="/albums">Albums</RouterLink>

    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="postcss">
  nav {
    display: flex;
    justify-content: space-around;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 35px;
    background: black;
    padding: 15px;
  }
 

</style>
