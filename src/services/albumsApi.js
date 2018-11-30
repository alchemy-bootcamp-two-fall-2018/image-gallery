const albums = [
  { 
    id: 'AstroWorld',
    title: 'AstroWorld',
    artist: 'Travis Scott'
    // images: []

  },
  {
    id: 'Blah',
    title: 'BlahBlah',
    artist: 'you know',
    images: [
      {
        title: 'BlahBlah cover',
        url:'https://www.creativefabrica.com/wp-content/uploads/2018/01/Squiggles-by-Cynesthetic.png'
      },
      { 
        title: 'fresh-price theme',
        url:'https://ih0.redbubble.net/image.473775209.1251/flat,550x550,075,f.u1.jpg' 
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
  }
};













