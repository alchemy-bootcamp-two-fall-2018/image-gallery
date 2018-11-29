
import VueRouter from 'vue-router';
import Home from './components/Home';
import Albums from './components/Albums';
import AlbumDetail from './components/AlbumDetail';


export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: '/albums/:id', component: AlbumDetail },
        { path: '*', redirect: '/' }
    ]
});