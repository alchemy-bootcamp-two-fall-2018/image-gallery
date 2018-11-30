import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Artists from './components/artists/Artists';
import NewArtist from './components/artists/NewArtist';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/artists', component: Artists },
    { path: '/artists/new', component: NewArtist }
  ]
});