
const albums = [
    { 
        id: 'ParliamentFunkadelic', 
        title: 'Funk', 
        images: [
            { 
                title: 'Parliament Funkadelic', 
                url: 'https://enjoy-napa-valley.com/wp-content/uploads/George-Clinton-Parliament-Funkadelic.jpg' 
            }
        ] 
    }, 

    { 
        id: 'SlyStone', 
        title: 'Funk', 
        images: [
            { 
                title: 'Sly and the Family Stone', 
                url: 'http://www.okayplayer.com/wp-content/uploads/2015/04/sly-and-the-family-stone-music-lover-live-1968-mp3-main.jpg' 
            }
        ] 
    }, 

    { 
        id: 'EarthWindFire', 
        title: 'Funk', 
        images: [
            { 
                title: 'Earth Wind and Fire', 
                url: 'http://userscontent2.emaze.com/images/56f00e02-4565-4612-ae6f-1bdaf7c4d7b2/9f31f99e-f4b4-404f-898e-7b68d50bea93.jpg' 
            }
        ] 
    }, 
];

export default {
    getAlbums() {
        return albums;
    },
    getAlbum(id) {
        return albums.find(album => album.id === id);
    },
    add(album) {
        album.id = '';
        album.images = [];
        albums.push(album);
        return album;
    }
};