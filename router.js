import VueRouter from 'vue-router';
import Home from './src/components/home/Home';
import Albums from './src/components/albums/Albums';


export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
    ]
});