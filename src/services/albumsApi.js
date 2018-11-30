const albums = [
    {   
        id: 'sand',
        name: 'sand',
        image: [{ picture: 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6edfebe98a9c2c83f02a1be8d0aa37d3&auto=format&fit=crop&w=2980&q=80' },
            { picture: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27429a308ad7f09805ac1863c08ddfcb&auto=format&fit=crop&w=800&q=60' },
            { picture: 'https://images.unsplash.com/photo-1501187327860-2f1943236e62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3d90d0da36d6d9c1c178ca6fcb3837a&auto=format&fit=crop&w=800&q=60' }]
    },
    {
        id: 'turtle',
        name: 'turtle',
        image: [{ picture: 'https://images.unsplash.com/photo-1533374900843-76bbd8249901?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fff6e479b20fe01e1c60e36969bd4d06&auto=format&fit=crop&w=934&q=80' },
            { picture:'https://images.unsplash.com/photo-1482642302383-7ba0f8012849?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64a402baf2bb8ad7822e25533202ada9&auto=format&fit=crop&w=800&q=60' },
            { picture: 'https://images.unsplash.com/photo-1496196614460-48988a57fccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2778a60edf78fa407b55be85316d964d&auto=format&fit=crop&w=800&q=60' }]
    },
    {
        id:'wave',
        name: 'wave',
        image: [{ picture:'https://images.unsplash.com/photo-1506921054449-27ba9b9264b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d71091e6bb5bfff2b5c918da467d88ee&auto=format&fit=crop&w=1950&q=80' },
            { picture:'https://images.unsplash.com/photo-1514990873524-9d666b286366?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69c301764cd8f6f9c98e5d9588af7034&auto=format&fit=crop&w=800&q=60' }, 
            { picture: 'https://images.unsplash.com/photo-1467096173887-42380f5e6e03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d0bba8e50e066710052795c5ba1d7c11&auto=format&fit=crop&w=800&q=60' }]
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