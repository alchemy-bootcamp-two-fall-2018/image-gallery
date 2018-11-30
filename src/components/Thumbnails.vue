<template>
    <ul>
        <li v-for="(image, index) in images"
        :key="index">
            <h4>{{image.title}}</h4>
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
    grid-template-columns: repeat(auto-fit, minmax(300, 1fr));
}
li {
    list-style-type: none;
}
img {
    width: 25vw;
}
</style>
