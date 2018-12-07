<template>
    <section>
    <div class='gallery'>
        <button @click="setIndex(-1)">&lt;</button>
        <img :src="images[selectedIndex].url" />
        <button @click="setIndex(1)">&gt;</button>
    </div>
    <p>{{images[selectedIndex].description}}</p>
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

<style scoped>
    img {
        width: 300px;
        height: 200px;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }
    .gallery {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
    }
    button {
        height: 30px;
        width: 20px;
    }
</style>
