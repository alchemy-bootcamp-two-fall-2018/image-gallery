<template>
  <Modal :onClose="() => this.$router.back()">
    <section>
      <h3>Gallery View</h3>
      {{selectedIndex}}
      <button @click="setIndex(-1)">&lt;</button>
        <div class="pic">
          {{image.title}}
          <img v-bind:src="image.url">
        </div>
      <button @click="setIndex(1)">&gt;</button>
    </section>
  </Modal>
</template>

<script>
import Modal from '../../Modal.vue';
export default {
  data() {
    return { 
      selectedIndex: 0
    };
  },
  props: {
    images: Array
  },
  components: {
    Modal
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
        this.selectedIndex = this.images.length; 
      }
    }
  }
};
</script>

<style>
  .pic {
    width: 30%;

  }

  img {
    width: 100%;
  }
</style>
