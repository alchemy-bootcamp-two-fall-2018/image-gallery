<template>
    <section>
        <h3>Thumbnail View</h3>
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
li {
 list-style: none;
}
img {
    float:left;
    position:relative;
    border: 1px solid #ddd; 
    border-radius: 3px; 
    padding: 5px; 
    width: 120px; 
}
img:hover {
    box-shadow: 0 0 2px 1px darkcyan;
}

</style>
    