
const albums = [
    { 
        id: 'artist-name', 
        title: 'Funk', 
        images: [
            { 
                title: 'Artist Name', 
                url: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-102__605.jpg' 
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