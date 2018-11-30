import VueRouter from 'vue-router';
import Home from './src/components/home/Home';
import Albums from './src/components/albums/Albums';
import AlbumDetail from './src/components/albums/AlbumDetail';
import NewAlbum from './src/components/albums/NewAlbum';
import ThumbnailView from './src/components/albums/images/ThumbnailView';
import ListView from './src/components/albums/images/ListView';


export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/albums', component: Albums },
        { path: '/albums/new', component: NewAlbum },
        { path: '/albums/:id', component: AlbumDetail,
            children: [
                { path: 'thumbnail', component: ThumbnailView },
                { path: 'list', component: ListView },
                { path: '', redirect: 'thumbnail' },
            ]
        },
        { path: '*', redirect: '/' }
    ]
});