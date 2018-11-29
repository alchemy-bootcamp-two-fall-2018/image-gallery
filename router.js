import VueRouter from 'vue-router';
import Home from './src/components/home/Home';
import Albums from './src/components/albums/Albums';
import AlbumDetail from './src/components/albums/AlbumDetail';


export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: '/albums/:id', component: AlbumDetail },
    ]
});