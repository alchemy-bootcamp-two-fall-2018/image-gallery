<template>
    <form @submit.prevent="onAdd(image)">
        <label>
            <span>Title: <input v-model="image.title"></span>
        </label>
         <label>
            <span>Url: <input v-model="image.url"></span>
        </label>
        <button>ADD</button>
     </form>
        

</template>

<script>
export default {
  data() {
    return {
      image:{
        title: '',
        url: ''
      }
    };
  },
  props: {
    onAdd: Function,
    onClose: Function
  }
};
</script>

<style>

</style>
