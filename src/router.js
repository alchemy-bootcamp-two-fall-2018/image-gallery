import VueRouter from 'vue-router';
import Albums from './components/Albums';
import AlbumDetail from './components/AlbumDetail';
import Home from './home/Home';
import About from './home/About';
import Thumbnails from './components/Thumbnails';
import Gallery from './components/Gallery';
import AlbumList from './components/AlbumList';

export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: '/about', component: About },
        { 
            path: '/albums/:id', 
            component: AlbumDetail,
            children: [
                { path: 'thumbnail', component: Thumbnails },
                { path: 'gallery', component: Gallery },
                { path: 'list', component: AlbumList },
                { path: '', redirect: 'thumbnail' }
            ]   
        },
        { path: '*', component: Home }
    ]
});