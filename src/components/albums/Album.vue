<template>
  <section>
    <div class="album-list">
      <li>
        <RouterLink class="album-link" :to="`/albums/${album.id}`">
          <div class="album-item"> 
            <p class="album-name">{{album.title}}</p>
            <p class="album-description">{{album.description}}</p>
          </div>
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
  .album-item {
    padding: 10px 0;
    color: green;
    border: 5px solid red; 
    border-radius: 10px;
    font-size: 2.5em;
    margin: 0px 10px;
    width: 100%;
    text-decoration: none;
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

  .album-link {
    text-decoration: none;
  }

  .album-name {
    font-size: 1em;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .album-description {
    font-size: 0.7em;
  }
</style>