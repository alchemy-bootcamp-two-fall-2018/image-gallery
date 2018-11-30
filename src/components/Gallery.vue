<template>
    <ul>
        <li v-for="(image, index) in images"
        :key="index">
            <h4>{{image.title}}</h4>
            <img :src="image.url">
            <h4>akl;</h4>
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

</style>
