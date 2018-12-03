<template>
  <div id="app">
    <Header/>
    <main>
      <RouterView></RouterView>
    </main>
    
  </div>
</template>

<script>
import Header from './Header.vue';

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
  text-align: center;
  color: gray;
  font-size:1.2rem;
  margin-top: 60px;
}
</style>
