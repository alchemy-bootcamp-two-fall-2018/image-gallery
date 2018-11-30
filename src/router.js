import VueRouter from 'vue-router';
import Home from './components/Home';
import Albums from './components/albums/Albums';
import AlbumDetail from './components/albums/AlbumDetail';
import ThumbnailView from './components/albums/images/ThumbnailView';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { 
      path: '/albums/:id', 
      component: AlbumDetail, 
      children: [
        { path: 'thumbnail', component: ThumbnailView },
      ]
    }, 
    { path: '*', redirect: '/' }
  ]
});