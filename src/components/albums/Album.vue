<template>
  <section>
    <div class="album-list">
      <li>
        <RouterLink :to="`/albums/${album.id}`">
          <span>{{album.title}}</span>
          <span>{{album.description}}</span>
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
    padding: 10px 0;
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

  li{
    padding-bottom: 20px;
    text-align: center;
    width: 90vw;
    text-decoration: none;

  }
</style>