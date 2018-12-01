<template>
    <section>
        <h3>List View</h3>
        <p>There are {{images.length}} images</p>
        <ul>
        <li v-for="(image, index) in images"
        :key="index">
        <h4>{{image.name}}</h4>
        <p>
            <img class="list-images" :src="image.picture"/>
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
.list-images     {
    float:left;
    position:relative;
    border: 1px solid white; 
    border-radius: 3px; 
    margin: 5px;
    padding: 5px; 
    width: 120px; 
    height:80px;
}
</style>
