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

body {
  background-color: rgba(0, 0, 0, .5);
  text-align: center;
}

a {
  text-decoration: none;
  color: rgb(161, 23, 216);
}

.content {
  display: inline-block;
  background-color: rgba(0, 0, 0, .5); 
  list-style: none;
  border: 2px solid rgb(90, 90, 35);
  width: 100px;
  margin: 1%;
  padding: 0.5%;
  text-align: center;
}
</style>
