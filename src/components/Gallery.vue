<template>
        <section>
            <button @click="setIndex(-1)">&lt;</button>
            <img :src="images[selectedIndex].url">
            <button @click="setIndex(1)">&gt;</button>        
        </section>
</template>

<script>
export default {
    data() {
        return {
            selectedIndex: 0
        };
    },
    props: {
        images: Array
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
            else if(this.selectedIndex < 0){
                this.selectedIndex = this.images.length - 1;
            }
        }
    }
};
</script>

<style>
    section {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        width: 100%
    }
</style>
