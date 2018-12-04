<template>
<section>
    <h3>Thumbnail View</h3>
    <ul>
        <li v-for="(image, index) in images"
            :key="index">
        <h4>{{image.title}}</h4>
        <img :src="image.urlImage">
        </li>
    </ul>
</section>
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
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px; 
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  position: relative;
  height: 300px;
  width: 275px;
  text-align: center;
  border: 2px solid steelblue;
}
ul img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
}
h4 {
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 40px;
  font-size: .75em;
  z-index: 1;
  color:red;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.699);
}

</style>
