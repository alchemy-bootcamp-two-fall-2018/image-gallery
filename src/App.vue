<template>
  <div id="app">
    <Header/>
    <Dinos/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Dinos from './components/Dinos.vue';
export default {
  name: 'app',
  components: {
    Header,
    Dinos
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
