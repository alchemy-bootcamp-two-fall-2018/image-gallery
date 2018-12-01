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

<style>
ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
li {
    list-style-type: none;
}
img {
    width: 25vw;
}
</style>
