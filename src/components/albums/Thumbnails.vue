<template>
    <ul>
        <li v-for="(image, index) in images"
        :key="index">
        <h4>{{image.name}}</h4>
        <p>
            <img :src="image.picture"/>
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
li {
    list-style: none;
}
img {
    width:200px;
}

</style>
