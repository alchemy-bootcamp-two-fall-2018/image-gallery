const albums = [
    {
        id: 'dachsund',
        title: 'Dachsunds',
        images: [
            {
                title: 'this is a Dachsund',
                url: 'https://www.rover.com/blog/wp-content/uploads/2017/06/pepper-mini-dachshund-960x540.jpg',
            }
        ]

    },
    {
        id: 'beagle',
        title: 'Beagles',
        images: []
    },
];

export default {
    getAlbums() {
        return albums;
    }
};