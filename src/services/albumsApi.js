const albums = [
    {   
        id: 'sand',
        name: 'sand',
        image: 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6edfebe98a9c2c83f02a1be8d0aa37d3&auto=format&fit=crop&w=2980&q=80',
    },
    {
        id: 'turtle',
        name: 'turtle',
        image: 'https://images.unsplash.com/photo-1533374900843-76bbd8249901?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fff6e479b20fe01e1c60e36969bd4d06&auto=format&fit=crop&w=934&q=80'
    },
    {
        id:'wave',
        name: 'wave',
        image: 'https://images.unsplash.com/photo-1506921054449-27ba9b9264b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d71091e6bb5bfff2b5c918da467d88ee&auto=format&fit=crop&w=1950&q=80'
    }
];

export default {
    getAlbums() {
        return albums;
    }, 
    getAlbum(id) {
        return albums.find(album => album.id === id);
    }

};