<template>
    <section>
     <p class="num">There are {{images.length}} image(s)</p>
        <li 
            v-for="(image, index) in images"
            :key="index">
            <img :src="image.url">
            <div class="info">
                <h4>{{image.title}}</h4>
                <p>{{image.url}}</p>
                <p><i>{{image.description}}</i></p>
            </div>
        </li>
    </section>
</template>

<script>
export default {
    props: {
        images: Array
    }
};
</script>

<style scoped>
    section {
        height: 100vh;
    }
    li {
        list-style: none;
        display: flex;
    }
    img {
        height: 200px;
        width: 300px;
        padding: 20px;

    }
    .num {
        text-align: center;
    }
    .info {
        padding-top: 60px;
    }
    
</style>
