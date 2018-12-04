import VueRouter from 'vue-router';
import Home from './components/Home';
import Albums from './components/albums/Albums.vue';
import AlbumDetail1 from './components/albums/AlbumDetail1.vue';
import About from './components/about/About.vue';
import NewAlbum from './components/albums/NewAlbum.vue';
import ThumbnailView from './components/albums/images/ThumbnailView.vue';
import ListView from './components/albums/images/ListView.vue';
import GalleryView from './components/albums/images/GalleryView.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/about', component: About },
    { path: '/albums/new', component: NewAlbum },
    { 
      path: '/albums/:id', 
      component: AlbumDetail1,
      children: [
        { path: 'thumbnail', component: ThumbnailView },
        { path: 'list', component: ListView },
        { path: 'gallery', component: GalleryView },
        { path: '', redirect: 'thumbnail' },
      ] 
    },
    { path: '*', redirect: '/' }
  ]
});