<template>
  <ul>
    <li class="list" v-for="image in images"
        v-bind:key="image.title">
        <img v-bind:src="image.url">
        <div>
          <h3>{{image.title}}</h3>
          <p><a v-bind:href="image.url" target="_blank">Image Link</a></p> 
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
  h3 {
    font-size: 2rem;
    text-align: center;
  }
  li {
    list-style-type: none;
    border: 2px solid red;
    display: flex;
    height: 250px;
    margin-bottom: 5px;
    padding: 0px;
    justify-content: flex-start;
  }

  img {
    height: 250px;
    width: 200px;
    padding-right: 50px;
    margin: 0px;
  }

  div {
    text-align: center;
  }

 
</style>
