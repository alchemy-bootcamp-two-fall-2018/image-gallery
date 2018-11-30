const albums = [
    {
        id: '1',
        type: 'velociraptor',
        images: [
            {
                title: 'Feather Beast',
                url: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Velociraptor_u4hjbq.jpg'
            }
        ]
    },
    {
        id: '2',
        type: 't-rex',
        images: []
    },
    {
        id: '3',
        type: 'long-neck',
        images: []
    }
];

export default {
    getAlbums() {
        return albums;
    },
    getThisAlbum(id) {
        return albums.find(album => album.id === id);
    }
};