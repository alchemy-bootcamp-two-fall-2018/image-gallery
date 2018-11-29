
import VueRouter from 'vue-router';
import Home from './components/Home';
import Albums from './components/Albums';


export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: '*', redirect: '/' }
    ]
});