
const albums = [
    {
        id: 'funk', 
        genre: 'Funk', 
        images: [
            { 
                artist: 'Parliament Funkadelic', 
                url: 'https://enjoy-napa-valley.com/wp-content/uploads/George-Clinton-Parliament-Funkadelic.jpg' 
            },
            { 
                artist: 'Sly and the Family Stone', 
                url: 'http://www.okayplayer.com/wp-content/uploads/2015/04/sly-and-the-family-stone-music-lover-live-1968-mp3-main.jpg' 
            },
            { 
                artist: 'Earth Wind and Fire', 
                url: 'http://userscontent2.emaze.com/images/56f00e02-4565-4612-ae6f-1bdaf7c4d7b2/9f31f99e-f4b4-404f-898e-7b68d50bea93.jpg' 
            }
        ] 
    },    
    {   
        id: 'blues', 
        genre: 'Blues', 
        images: [
            { 
                artist: 'BB King', 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/B.B._King_in_2009.jpg/450px-B.B._King_in_2009.jpg'
            },
            { 
                artist: 'Bessie Smith', 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg/330px-Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg' 
            },
            { 
                artist: 'Robert Johnson', 
                url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Robert_Johnson.png' 
            }
        ] 
    }, 
    {
        id: 'jazz', 
        genre: 'Jazz', 
        images: [
            { 
                artist: 'Miles Davis', 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Miles_Davis_by_Palumbo.jpg/330px-Miles_Davis_by_Palumbo.jpg' 
            },
            { 
                artist: 'Luis Armstrong', 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/330px-Louis_Armstrong_restored.jpg' 
            },
            { 
                artist: 'John Coltrane', 
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