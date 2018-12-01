import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Teams from './components/teams/Teams';
import TeamDetail from './components/teams/TeamDetail';
import NewTeam from './components/teams/NewTeam';
import Thumbnails from './components/teams/Thumbnails';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/teams', component: Teams },
        { path: '/teams/new', component: NewTeam },
        { 
            path: '/teams/:id', 
            component: TeamDetail,
            children: [
                { path: 'thumbnail', component: Thumbnails },
                { path: '', redirect: 'thumbnail' }
            ]
        },
        { path: '*', redirect: '/' }


    ]
});