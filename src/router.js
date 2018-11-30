import VueRouter from 'vue-router';
import Home from './components/Home';
import Albums from './components/albums/Albums.vue';
import AlbumDetail1 from './components/albums/AlbumDetail1.vue';
import About from './components/about/About.vue';
import NewAlbum from './components/albums/NewAlbum.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/:id', component: AlbumDetail1 },
    { path: '/about', component: About },
    { path: '/albums/new', component: NewAlbum }
  ]
});