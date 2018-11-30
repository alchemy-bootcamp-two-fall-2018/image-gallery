
const albums = [
    { 
        id: 'bb-king', 
        title: 'Blues', 
        images: [
            { 
                title: 'BB King', 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/B.B._King_in_2009.jpg/450px-B.B._King_in_2009.jpg' 
            }
        ] 
    }, 
    {
        id: 'bessie-smith', 
        title: 'Blues', 
        images: [
            { 
                title: 'Bessie Smith', 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg/330px-Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg' 
            }
        ] 
    },
    {
        id: 'robert-johnson', 
        title: 'Blues', 
        images: [
            { 
                title: 'Robert Johnson', 
                url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Robert_Johnson.png' 
            }
        ] 
    },
    {
        id: 'miles-davis', 
        title: 'Jazz', 
        images: [
            { 
                title: 'Miles Davis', 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Miles_Davis_by_Palumbo.jpg/330px-Miles_Davis_by_Palumbo.jpg' 
            }
        ] 
    },
    {
        id: 'luis-armstrong', 
        title: 'Jazz', 
        images: [
            { 
                title: 'Luis Armstrong', 
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/330px-Louis_Armstrong_restored.jpg' 
            }
        ] 
    },
    {
        id: 'john-coltrane', 
        title: 'Jazz', 
        images: [
            { 
                title: 'John Coltrane', 
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