<template>
  <div>
    <Header/>
    <main>
      App will be here
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

</style>

