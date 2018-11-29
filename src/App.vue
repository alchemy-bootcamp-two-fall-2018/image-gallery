<template>
  <div id="app">
    <Header/>
    <main>
      I am the app
      <RouterView></RouterView>
    </main>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'; 

export default {
  components: {
    Header
  }
};

</script>

<style>

</style>
