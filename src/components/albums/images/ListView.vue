<template>
    <section>
        <h3>List View</h3>
        <p>There are {{images.length}} images</p>
        <ul>
        <li v-for="(image, index) in images"
        :key="index">
        <h4>{{image.name}}</h4>
        <p>
            <img :src="image.picture"/>
        </p> 
        </li>
    </ul>
    </section>   
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
