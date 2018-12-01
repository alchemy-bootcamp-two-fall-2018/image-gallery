<template>
    <section>
        <h3>Thumbnail View</h3>
    <ul>
        <li v-for="(image, index) in images"
        :key="index">
        <h4>{{image.name}}</h4>
        <p>
            <img class="thumb-images" :src="image.picture"/>
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
.thumb-images {
    float:left;
    position:relative;
    border: 1px solid white; 
    border-radius: 3px; 
    margin: 5px;
    padding: 5px; 
    width: 120px; 
    height:80px;
    background-color:grey;

}
img:hover {
    box-shadow: 0 0 2px 1px darkcyan;
}

</style>
    