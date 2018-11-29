import VueRouter from 'vue-router';
import Albums from './components/Albums';
// import AlbumDetail from '../components/AlbumDetail';
import Home from './Home/Home';

export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums }
    ]
});