<template>
<Modal :onClose="() => this.$router.back()">
  <section>
      <h3>Gallery View</h3>
      {{selectedIndex}}
      <p>
        <button @click="setIndex(-1)" :disabled="selectedIndex === 0">&lt;</button>
        <button @click="setIndex(-1)">&lt;</button>
        {{color}}
        <button @click="setIndex(1)">&gt;</button>
      </p>
    </section>
  <ul>
    <li 
      v-for="(image, index) in images"
      :key="index">
      <h4>{{image.title}}</h4>
      <p>
        <img :src="image.url">
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

<style scoped lang="postcss">
li {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

}

img {
  width: 200px;

}
</style>
