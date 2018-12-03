<template>
    <div>
        <h3>I'm a ListView</h3>
        <ul>
            <li
                v-for="(image, index) in images"
                :key="index">
                <p>{{image.title}}<p>
                <p>
                    <!-- <img :src="image.url"> -->
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    images: Array 
  }

};
</script>

<style>

ul {
    list-style-type: none;
}

</style>
