
const albums = [
    { 
        id: 'bunny', 
        title: 'Cute Bunnies', 
        images: [
            { 
                title: 'so cute', 
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