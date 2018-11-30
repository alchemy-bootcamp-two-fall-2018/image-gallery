import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Albums from './components/albums/Albums';
import AlbumDetail from './components/albums/AlbumDetail';
import NewAlbum from './components/albums/NewAlbum.vue';
import About from './About';
import Thumbnails from './components/albums/Thumbnails.vue';
import GenreList from './components/albums/GenreList.vue';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: './albums/new', component: NewAlbum },
        { 
            path: '/albums/:id', 
            component: AlbumDetail,
            children: [
                { path: 'thumbnail', component: Thumbnails },
                { path: 'genrelist', component: GenreList },
                { path: '', redirect: 'thumbnail' }
            ]
        },
        { path: '/About', component: About }
    ]
});