<template>
<section>
  <h3>
  List of image links:
  </h3>
  <ul>
    <li 
    v-for="(image, index) in images"
    :key="index">
      <p> 
        
        <a :href="image.url">{{image.title}}</a>
      </p>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  props: {
    images: Array
  },
  
};
</script>

<style scoped lang="postcss">
li {
  color: blue;
}
img {
  width: 200px;
  
}


</style>
