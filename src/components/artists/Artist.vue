<template>
    <section>
        <li>
            <RouterLink :to="`/artists/${artist.name}`"><img :src="artist.image"></RouterLink>
        </li>
    </section>
</template>

<script>
export default {
  props: {
    artist: Object,
  }
};
</script>

<style>

</style>
