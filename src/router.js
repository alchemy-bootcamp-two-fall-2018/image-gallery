import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Albums from './components/albums/Albums';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums }
    ]
});