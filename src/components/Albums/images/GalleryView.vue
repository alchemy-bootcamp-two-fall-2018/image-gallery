<template>
<Modal :onClose="() => this.$router.back()">
  <section>
      <h3>Gallery View</h3>
      {{selectedIndex}}
      <p>
        <button @click="setIndex(-1)">&lt;</button>
        {{color}}
        <button @click="setIndex(1)">&gt;</button>
      </p>
    </section>
  </Modal>  
</template>

<script>
import Modal from './Modal';

export default {
  data() {
    return {
      selectedIndex: 0
    };
  },
  props: {
    images: Array
  },
  component: {
    Modal
  },
  computed: {
    imagesDisplay() {
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
<style scoped lang="postcss">
li {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

}

img {
  width: 200px;

}
</style>
