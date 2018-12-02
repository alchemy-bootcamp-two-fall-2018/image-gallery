<template>
  <Modal class="modal" v-bind:onClose="() => this.$router.back()">
    <section>
      <div class="gallery-container">
        <button class="gallery-button" @click="setIndex(-1)">&lt;</button>
          <p class="pic">
            {{image.title}}
            <img class="gallery" v-bind:src="image.url">
          </p>
        <button class="gallery-button" @click="setIndex(1)">&gt;</button>
      </div>
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
  .gallery-container {
    display: flex;
    justify-content: space-evenly;
    margin: 20px 30px;
  }
  .pic {
    position: relative;
    height: 400px;
    width: 400px;
    text-align: center;
    border: 3px solid red;
    margin: 5px;
  }
  .gallery {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
  .modal {
    position: fixed;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);
    z-index: 20;
  }
  section h3 {
    text-align: center;
    font-size: 3em;
  }
  .gallery-button {
    margin-top: 35%;
    height: 40px;
    width: 40px;
    font-size: 1.5em;
    border: 4px solid black;
  }
</style>
