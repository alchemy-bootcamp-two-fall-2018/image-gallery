<template>
  <section>
    <div class="album-list">
      <li>
        <RouterLink :to="`/albums/${album.id}`">
          <span>{{album.title}}</span>
        </RouterLink>
      </li>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    album: Object
  }
};
</script>

<style>
  li span {
    padding-top: 5%;
    color: green;
    border: 5px solid red; 
    border-radius: 10px;
    font-size: 2.5em;
    margin: 0px 10px;
    width: 100%;
  }
  .album-list li {
    border: none;
    margin: 0px;
  }
</style>