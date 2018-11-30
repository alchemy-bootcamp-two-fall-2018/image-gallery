<template>
    <ul>
        <li 
            v-for="(image, index) in images"
            :key="index">
            <h4>{{image.title}}</h4>
            <p>
                <img :src="image.url">
            </p>
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
        grid-template-columns: repeat(4, 1fr);
    }
    img {
        height: 200px;
        width: 300px;
    }
    li {
        list-style: none;
    }
</style>
