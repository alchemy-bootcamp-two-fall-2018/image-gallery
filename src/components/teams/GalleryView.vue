
<template>
    <section>
        <h3>Gallery View</h3>
        <!-- <img :src="players.url"> -->
        <p>
            <button @click="setIndex(-1)">&lt;</button>
                <img :src="team.url">
            <button @click="setIndex(1)">&gt;</button>
        </p>
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
        players: Array
    },
    computed: {
        team() {
            return this.players[this.selectedIndex];
        }
    },

    methods: {
        setIndex(amt) {
            this.selectedIndex += amt;
            if(this.selectedIndex === this.players.length) {
                this.selectedIndex = 0;
            }
            else if(this.selectedIndex < 0) {
                this.selectedIndex = this.players.length - 1;
            }
        }
    }
};
</script>

<style>

</style>