import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Albums from './components/Albums/Albums.vue';
import AlbumDetail from './components/Albums/AlbumDetail';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/:id', component: AlbumDetail }
    

  ]
});