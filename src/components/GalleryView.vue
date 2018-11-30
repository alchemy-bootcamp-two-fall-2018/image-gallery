<template>
    <section>
    this is the Gallery
    {{ selectedIndex }}
    <button @click="setIndex(-1)">&lt;</button>
    <img :src="images[selectedIndex].url" />
    <button @click="setIndex(1)">&gt;</button>
    </section>
</template>

<script>
export default {
    props: {
        images: Array,
    },
    data() {
        return {
            selectedIndex: 0,
        };
    },
    methods: {
        setIndex(index) {
            this.selectedIndex += index;
            if(this.selectedIndex === this.images.length) {
                this.selectedIndex = 0;
            }
            else if(this.selectedIndex < 0) {
                this.selectedIndex === this.images.length - 1;
            }
        }
    }
};

</script>

<style>
    img {
        width: 300px;
        height: 200px;
    }
</style>
