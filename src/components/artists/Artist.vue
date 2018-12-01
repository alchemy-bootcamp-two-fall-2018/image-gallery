<template>
    <section>
        <li>
            <RouterLink :to="`/artists/${artist.name}/records`"><img :src="artist.image"><p>{{artist.name}}</p></RouterLink>
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
