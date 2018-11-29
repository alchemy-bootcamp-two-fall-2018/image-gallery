const albums = [
    {
        id: 0,
        type: 'velociraptor',
        images: [
            {
                title: 'Feather Beast',
                url: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Velociraptor_u4hjbq.jpg'
            }
        ]
    },
    {
        id: 1,
        type: 't-rex',
        images: []
    },
    {
        id: 2,
        type: 'long-neck',
        images: []
    }
];

export default {
    getAlbums() {
        return albums;
    }
};