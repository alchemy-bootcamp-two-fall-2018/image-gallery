<template>
    <div>
     <p>There are {{images.length}} image(s)</p>

     <li 
            v-for="(image, index) in images"
            :key="index">
            <h4>{{image.title}}</h4>
            <p>{{image.url}}</p>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        images: Array
    }
};
</script>

<style scoped>
    li {
        list-style: none;
    }
</style>
