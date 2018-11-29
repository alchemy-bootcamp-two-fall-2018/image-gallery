import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Artists from './components/artists/Artists';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/artists', component: Artists }
  ]
});