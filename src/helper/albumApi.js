import shortid from 'shortid';
import albumData from './albumData.js';

const json = window.localStorage.getItem('albums');

let albums = null;

if(json){
    albums = JSON.parse(json);
}
else {
    albums = albumData;
    save();
}

function save() {
    window.localStorage.setItem('albums', JSON.stringify(albums));
}

export default {
    getAlbums() {
        return albums;
    },
    getThisAlbum(id) {
        return albums.find(album => album.id === id);
    },
    add(album) {
        album.id = shortid.generate();
        album.images = [];
        albums.push(album);
        save();
        console.log(albums);
        return album;
    },

};