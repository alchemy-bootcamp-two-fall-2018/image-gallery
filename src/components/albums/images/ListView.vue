<template>
    <section>
        <h3>List View</h3>
        <p>There are {{images.length}} images</p>
        <ul>
        <li class= "list-pictures" v-for="(image, index) in images"
        :key="index">
        <p>{{image.title}}</p>
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
.list-pictures {
    width:100px;
}
.list-images     {
   width:100px
}
</style>
