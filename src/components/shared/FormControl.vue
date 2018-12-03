<template>
    <label>
        <span v-if="label">{{label}}:</span>
        <slot></slot>
    </label>
</template>

<script>
export default {
    props: {
        label: String
    }
};
</script>

<style>

</style>
