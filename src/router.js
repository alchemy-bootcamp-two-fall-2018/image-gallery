import VueRouter from 'vue-router';
import Home from './components/Home';
import Albums from './components/albums/Albums';
import AlbumDetail from './components/albums/AlbumDetail';
import NewAlbum from './components/albums/NewAlbum';
import ThumbnailView from './components/albums/images/ThumbnailView';
import GalleryView from './components/albums/images/GalleryView';
import ListView from './components/albums/images/ListView';



export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/new', component: NewAlbum },
    { 
      path: '/albums/:id', 
      component: AlbumDetail, 
      children: [
        { path: 'thumbnail', component: ThumbnailView },
        { path: 'gallery', component: GalleryView },
        { path: 'list', component: ListView },
        { path: '', redirect: 'thumbnail' },
      ]
    }, 
    { path: '*', redirect: '/' }
  ]
});