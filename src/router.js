import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Teams from './components/teams/Teams';
import TeamDetail from './components/teams/TeamDetail';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/teams', component: Teams },
        { path: '/teams/:id', component: TeamDetail },

    ]
});