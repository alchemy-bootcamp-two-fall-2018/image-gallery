<template>
    <ul>
        <li
            v-for="(image, index) in images"
            :key="index">
            
            <h4>{{image.artist}}</h4>
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
    li{
        list-style: none;
    }
</style>
