<template>
    <section>
        <h3>Gallery View</h3>
        <p>
            <button @click="setIndex(-1)">&lt;</button>
            {{images.picture}}
            <button @click="setIndex(1)">&gt;</button>
        </p>    
    </section>
</template>

<script>
export default {

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

<style>

</style>
