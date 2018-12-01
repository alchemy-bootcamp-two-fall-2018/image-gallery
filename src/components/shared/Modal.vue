<template>
    <div class="modal">
        <span class="content">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.modal {
   background-color: rgba(0,0,0,.5);
   height: 100%;
   width: 100%;
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0; 
}
.content{
    background: white;
    padding: 40px;
}
</style>
