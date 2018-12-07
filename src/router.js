
import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Albums from './components/albums/Albums';
import About from './components/About';
import AlbumDetail from './components/albums/AlbumDetail';
import Thumbnails from './components/albums/Thumbnails';
import ListView from './components/albums/ListView';
import GalleryView from './components/albums/GalleryView';


export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/albums', component: Albums },
        { 
            path: '/albums/:id', component: AlbumDetail,
            children: [
                { path: 'thumbnail', component: Thumbnails },
                { path: 'list', component: ListView },
                { path: 'gallery', component: GalleryView },
                { path: '', redirect: 'thumbnail' },
            ]
    
        },
        { path: '*', redirect: '/' }
    ]
});