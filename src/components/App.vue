<template>
  <div id="app">
  <Header />
  <RouterView></RouterView>
  </div>
  
</template>

<script>
import Header from './Header';

export default {
  name: 'app',
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
  color: #2c3e50;
}
</style>
