import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Teams from './components/teams/Teams';
import TeamDetail from './components/teams/TeamDetail';
import NewTeam from './components/teams/NewTeam';
import Thumbnails from './components/teams/Thumbnails';
import ListView from './components/teams/ListView';
import GalleryView from './components/teams/GalleryView';
import About from './About';

export default new VueRouter({
    routes: [
        { path: '/About', component: About },
        { path: '/', component: Home },
        { path: '/teams', component: Teams },
        { path: '/teams/new', component: NewTeam },
        { 
            path: '/teams/:id', 
            component: TeamDetail,
            children: [
                { path: 'thumbnail', component: Thumbnails },
                { path: 'gallery', component: GalleryView },
                { path: 'listview', component: ListView },
                { path: '', redirect: 'thumbnail' }
            ]
        },
        { path: '*', redirect: '/' }


    ]
});