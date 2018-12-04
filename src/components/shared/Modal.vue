<template>
    <div class="modal" @click="onClose" @keyup.esc="onClose">
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
        this.documentListener = event => {
            if(event.keyCode === 27) {
                this.onClose();
            }
        };
        document.addEventListener('keyup', this.documentListener);
    },
    destroyed() {
        document.removeEventListener('keyup', this.documentListener);
    }
};
</script>

<style>
div.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  z-index: 2;
}
div.content {
  position: relative;
  background: white;
  padding: 40px;
}
form {
  text-align: center;
  display: flex;
  justify-content: space-evenly;
}
button {
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  font-size: 0.75em;
  background-color:rgba(175, 22, 22, 0.851);
  color: lightsteelblue;
}
span {
  display: inline-block;
}
input {
  width: 200px;
  height: 20px;
}
label {
  display: flex;
  padding-right: 7px;
  font-size: 1.1em;
  font-weight: 500;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
