<template>
  <header>
      <RouterLink to="/"><img src="../assets/logo.png" alt="cars logo" class="logo"></RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/albums">Albums</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style>
nav {
  display:flex;
  justify-content: space-evenly;
}
</style>
