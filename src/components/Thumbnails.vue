<template>
    <ul>
        <li v-for="(image, index) in images"
        :key="index">
            <img :src="image.url"/>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        images: Array
    }
};
</script>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 10px;
}
li {
    list-style-type: none;
}
img {
    width: 10vw;
}
</style>
