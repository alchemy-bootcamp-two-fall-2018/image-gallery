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
}
img {
    width: 12vw;
}

</style>
