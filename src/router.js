import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Albums from './components/albums/Albums';
import AlbumDetail from './components/albums/AlbumDetail';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: '/albums/:id', component: AlbumDetail }
    ]
});