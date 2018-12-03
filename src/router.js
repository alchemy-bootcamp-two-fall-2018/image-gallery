import VueRouter from 'vue-router';
import Home from './components/home/Home';
import About from './components/about/About';
import Albums from './components/albums/Albums';
import AlbumDetail from './components/albums/AlbumDetail';
import ThumbnailView from './components/albums/images/ThumbnailView';
import ListView from './components/albums/images/ListView';
import GalleryView from './components/albums/images/GalleryView';



export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/about', component: About },

    { 
      path: '/albums/:id', 
      component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: ThumbnailView },
        { path: 'list', component: ListView },
        { path: 'gallery', component: GalleryView },
        { path: '', redirect: 'thumbnail' }
      ]
    },
    

    
    { path: '*', redirect: '/' }

  ]
});