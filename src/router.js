import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Teams from './components/teams/Teams';
import TeamDetail from './components/teams/TeamDetail';
import NewTeam from './components/teams/NewTeam';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/teams', component: Teams },
        { path: '/teams/new', component: NewTeam },
        { path: '/teams/:id', component: TeamDetail },
        { path: '*', redirect: '/' }


    ]
});