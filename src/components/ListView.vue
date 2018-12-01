<template>
    <div>
     <p class="num">There are {{images.length}} image(s)</p>
        <li 
            v-for="(image, index) in images"
            :key="index">
            <img :src="image.url">
            <div class="info">
                <h4>{{image.title}}</h4>
                <p>{{image.url}}</p>
            </div>
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
