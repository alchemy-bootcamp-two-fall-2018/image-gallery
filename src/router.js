import VueRouter from 'vue-router';
import Home from './components/Home';
import Albums from './components/albums/Albums.vue';
import AlbumDetail from './components/albums/AlbumDetail.vue';
import About from './components/about/About.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/:id', component: AlbumDetail },
    { path: '/about', component: About },


  ]
});