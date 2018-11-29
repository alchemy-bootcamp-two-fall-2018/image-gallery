import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Teams from './components/teams/Teams';
import Team from './components/teams/Team';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/teams', component: Teams },
        { path: '/team', component: Team }
    ]
});