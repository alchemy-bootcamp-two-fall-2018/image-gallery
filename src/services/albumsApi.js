
const albums = [
    {
        id: 'parliamentfunkadelic', 
        title: 'Funk', 
        artist: 'Parliament Funkadelic', 
        images: [
            { 
                url: 'https://enjoy-napa-valley.com/wp-content/uploads/George-Clinton-Parliament-Funkadelic.jpg' 
            }
        ] 
    }, 

    { 
        id: 'slystone', 
        title: 'Funk', 
        artist: 'Sly and the Family Stone', 
        images: [
            { 
                url: 'http://www.okayplayer.com/wp-content/uploads/2015/04/sly-and-the-family-stone-music-lover-live-1968-mp3-main.jpg' 
            }
        ] 
    }, 

    { 
        id: 'earthwindfire', 
        title: 'Funk', 
        artist: 'Earth Wind and Fire', 
        images: [
            { 
                url: 'http://userscontent2.emaze.com/images/56f00e02-4565-4612-ae6f-1bdaf7c4d7b2/9f31f99e-f4b4-404f-898e-7b68d50bea93.jpg' 
            }
        ]
    },
    {   
        id: 'bbking', 
        title: 'Blues', 
        artist: 'BB King', 
        images: [
            { 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/B.B._King_in_2009.jpg/450px-B.B._King_in_2009.jpg'
            }
        ] 
    }, 
    {
        id: 'bessiesmith', 
        title: 'Blues', 
        artist: 'Bessie Smith', 
        images: [
            { 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg/330px-Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg' 
            }
        ] 
    },
    {
        id: 'robertjohnson', 
        title: 'Blues', 
        artist: 'Robert Johnson', 
        images: [
            { 
                url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Robert_Johnson.png' 
            }
        ] 
    },
    {
        id: 'milesdavis', 
        title: 'Jazz', 
        artist: 'Miles Davis', 
        images: [
            { 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Miles_Davis_by_Palumbo.jpg/330px-Miles_Davis_by_Palumbo.jpg' 
            }
        ] 
    },
    {
        id: 'luisarmstrong', 
        title: 'Jazz', 
        artist: 'Luis Armstrong', 
        images: [
            { 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/330px-Louis_Armstrong_restored.jpg' 
            }
        ] 
    },
    {
        id: 'johncoltrane', 
        title: 'Jazz', 
        artist: 'John Coltrane', 
        images: [
            { 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/John_Coltrane_1963.jpg/330px-John_Coltrane_1963.jpg' 
            }
        ] 
    }
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