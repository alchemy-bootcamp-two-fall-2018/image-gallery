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

</style>

