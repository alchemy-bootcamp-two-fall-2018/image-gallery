<template>
    <form @submit.prevent="onAdd(image)">
        Title: <input v-model="image.title" required>
        Url: <input v-model="image.urlImage" required>
        <button>Save</button>
    </form>
</template>

<script>

export default {
    data() {
        return {
            image: {
                title: '',
                urlImage: ''
            }
        };
    },
    props: {
        onAdd: Function
    }

};
</script>

<style>

</style>
