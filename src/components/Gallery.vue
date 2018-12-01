<template>
        <section>
            <h3>Gallery</h3>
            <!-- <p v-for="(image, index) in images" :key="index"><img :src="image.url"></p> -->
            <img :src="images[selectedIndex].url">        
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
    }
};
</script>

<style>

</style>
