import VueRouter from 'vue-router';
import Home from './src/components/home/Home';
import Albums from './src/components/albums/Albums';
import AlbumDetail from './src/components/albums/AlbumDetail';
import NewAlbum from './src/components/albums/NewAlbum';


export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: '/albums/new', component: NewAlbum },
        { path: '/albums/:id', component: AlbumDetail },

    ]
});