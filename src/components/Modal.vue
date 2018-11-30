<template>
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">X</button>
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