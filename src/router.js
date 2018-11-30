import VueRouter from 'vue-router';
import Albums from './components/Albums';
import AlbumDetail from './components/AlbumDetail';
import Home from './home/Home';
import About from './home/About';

export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: '/albums/:id', component: AlbumDetail },
        { path: '/about', component: About },
        { path: '*', component: Home }
    ]
});