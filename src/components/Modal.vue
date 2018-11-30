<template>
  <div @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onClose: Function
  },
  created() {
    console.log('Modal created');
    this.documentListener = event => {
      if(event.keyCode === 27) {
        console.log('closing');
        this.onClose();
      }
    };
    document.addEventListener('keyup', this.documentListener);
  }
};
</script>

<style>
  .content {
    width: 50%;
    height: 30%;
    background: white;
  }

  .close {
    font-size: 1.2em;
    width: 30px;
    height: 30px;
    border: 2px solid black;
    background-color: red;
  }
  
</style>

