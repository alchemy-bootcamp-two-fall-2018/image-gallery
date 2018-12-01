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

<style scoped>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 15px; 
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding: 0px 50px;
    margin: 0px;
  }

  li {
    position: relative;
    height: 300px;
    width: 300px;
    text-align: center;
    border: 3px solid red;
    margin-top: 30px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }

  h4 {
    position: absolute;
    padding: 7px 0px 0px 0px;
    margin: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.5);
    font-size: 1.5em;
    z-index: 10;
  }
</style>

