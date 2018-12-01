<template>
<Modal :onClose="() => this.$router.back()">
    <section>
        <h3>Gallery View</h3>
        <p>
            <button @click="setIndex(-1)">&lt;</button>
            <img v-bind:src="image.picture">
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

</style>
