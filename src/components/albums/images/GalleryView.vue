<template>
        <section>
            <h3>Gallery View</h3>
            <div>
                <button @click="setIndex(-1)">&lt;</button>
                <h4>{{image.title}}</h4>
                <button @click="setIndex(+1)">&gt;</button>
            </div>
                <img :src="image.urlImage">
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
            else if(this.selectedIndex < 0) {
                this.selectedIndex = this.images.length - 1;
            }
        }
    }
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
}
h4 {
    position: relative;
    color: red;
    font-weight: bold;
    font-size: 16px;
    margin: 0px;
}
img {
    width: 50%;
}
button {
    width: 40px;
}
</style>
