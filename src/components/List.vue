<template>
    <ul>
        <li v-for="(image, index) in images"
        :key="index">
            <h4>{{image.title}}</h4>
            <img :src="image.url">
            <p>{{image.description}}</p>
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
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 5px;
        align-items: center;
    }
    li {
        width: 200px;
        height: autp;
        background-color: rgba(110,127,128, 0.2);
        padding: 5px;
    }
    img {
        width: 100%;
        border-radius: 8px;
    }
</style>
