<template>
  <div>
    <Header/>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>

import Header from './Header';

export default {
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
