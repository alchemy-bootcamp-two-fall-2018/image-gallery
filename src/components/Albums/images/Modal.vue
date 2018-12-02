<template>
  <div class="modal" @click="onClose">
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
  }
};
</script>

<style>

</style>
