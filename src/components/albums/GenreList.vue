<template>
    <ul>
        <li
            v-for="(image, index) in images"
            :key="index">

            <p> 
                <img :src="image.url">
            </p>
            <p>
                {{image.artist}}
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

<style>
    li{
        list-style: none;
    }

    img {
        max-height: auto;
        max-width: 20vh;
    }
</style>
