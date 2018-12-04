<template>
    <section>
    <h3>List View</h3>
        <p>
            There are {{images.length}} image(s):
        </p>
    <ul>
        <li v-for="(image, index) in images"
            :key="index">
            <h4>{{image.title}}</h4>
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

<style scoped>
ul  {
    display: block;  
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    height: 50px;
    text-align: center;
    border: 2px solid steelblue;
    padding-top: 10px;
}
h4 {
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 20px;
    font-size: .95em;
    font-weight: bold;
}
</style>
