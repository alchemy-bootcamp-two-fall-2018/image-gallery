<template>
  <ul>
    <li
      v-for="(image, index) in images"
      v-bind:key="index">
      <h4>{{image.title}}</h4>
      <p>
        <img v-bind:src="image.url">
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    images: Array
  }
};
</script>

<style>
</style>

