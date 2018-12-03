<template>
<section>
    <h3>Gallery View</h3>
    {{selectedIndex}}
    <p>
        <button @click="setIndex(-1)">&lt;</button>
            <img :src="image.url">
        <button @click="setIndex(1)">&gt;</button>
    </p>
</section>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0
    };
  },  
  props: {
    images: Array 
  },
  computed: {
    image() {
      return this.images[this.selectedIndex];
    }
  },
  methods: {
    setIndex(amt) {
      this.selectedIndex += amt;
      if(this.selectedIndex === this.images.length) {
        this.selectedIndex = 0;
      }
      else if(this.selectedIndex < 0) {
        this.selectedIndex = this.images.length - 1;
      }
    } 
  }
};
</script>

<style>

ul {
    list-style-type: none;
}

</style>
