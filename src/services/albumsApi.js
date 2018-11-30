const albums = [
    {
        id: 'dachsund',
        title: 'Dachsunds',
        images: [
            {
                title: 'this is a Dachsund',
                url: 'https://www.rover.com/blog/wp-content/uploads/2017/06/pepper-mini-dachshund-960x540.jpg',
            },
            {
                title: 'this is also a Dachsund',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxC8_mIsXGec7joCTAa8fnNkloC7bQ9lb-0IzxXHyv5qsOxJ1ocA'
            }
        ]

    },
    {
        id: 'beagle',
        title: 'Beagles',
        images: [
            {
                title: 'this is a Beagle',
                url: 'https://i.pinimg.com/originals/a7/f8/70/a7f870516475a1fc3b52dad9b9ec2c4b.jpg'
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
    }
};