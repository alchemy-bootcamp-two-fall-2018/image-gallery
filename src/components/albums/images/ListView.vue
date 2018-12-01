<template>
  <ul>
    <li v-for="image in images"
        v-bind:key="image.title">
        <h3>{{image.title}}</h3>
        <p>url: {{image.url}} </p> 
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
