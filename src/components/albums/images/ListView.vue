<template>
  <ul>
    <li class="list" v-for="image in images"
        v-bind:key="image.title">
        <img v-bind:src="image.url">
        <div>
          <h3>{{image.title}}</h3>
          <p><a v-bind:href="image.url" target="_blank">{{image.url}}</a></p> 
          <p>{{image.description}}</p>
        </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    images: Array,
  }
};
</script>

<style scoped>
  li {
    list-style-type: none;
    border: 2px solid red;
    display: flex;
  }

  img {
    height: 300px;
    width: 200px;
    padding-right: 20px;
  }

 
</style>
