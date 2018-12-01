
import VueRouter from 'vue-router';
import Home from './components/Home';
import Albums from './components/Albums';
import About from './components/About';
import AlbumDetail from './components/AlbumDetail';
import Thumbnails from './components/Thumbnails';
import ListView from './components/ListView';
import GalleryView from './components/GalleryView';


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