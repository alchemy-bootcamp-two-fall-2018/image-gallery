<template>
<Modal :onClose="() => this.$router.back()">
    <section>
        <h3 class="gallery-view">Gallery View</h3>
        <p>
            <button @click="setIndex(-1)">&lt;</button>
            <img class= "gallery-images" v-bind:src="image.picture">
            <button @click="setIndex(1)">&gt;</button>
        </p>    
    </section>
</Modal>
</template>

<script>
import Modal from '../../shared/Modal.vue';

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
                this.selectedIndex = this.images.length - 1;
            }
        }
    }
};
</script>

<style>
img {
float:left;
}
.gallery-images {
    position:relative;
    border: 1px solid white; 
    border-radius: 3px; 
    margin: 5px;
    padding: 5px; 
    width: 420px; 
    height:300px;
}
</style>
