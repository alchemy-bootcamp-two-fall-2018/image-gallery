<template>
  <div>
    <Header/>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    name: 'app',
    components: {
        Header
    }
};
</script>

<style>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
