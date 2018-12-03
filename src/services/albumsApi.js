const albums = [
  { id: 'bats', title: 'Bats', images: [
    { 
      title: 'A bat', 
      url: 'https://images.boredomfiles.com/wp-content/uploads/2016/03/03-cute-bats.jpg' 
    }, 
    {
      title: 'Another bat', 
      url: 'https://images.boredomfiles.com/wp-content/uploads/2016/03/03-cute-bats.jpg' 
    }, 
    {
      title: 'Another bat', 
      url: 'https://images.boredomfiles.com/wp-content/uploads/2016/03/03-cute-bats.jpg' 
    }
  ] },
  { id: 'spiders', title: 'Spiders', images: [    
    { 
      title: 'A spider', 
      url: 'http://www.bendbulletin.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=mhcJCVJ8KKHRPwwqAnbx98$daE2N3K4ZzOUsqbU5sYuoqiCu3qMqMhalP7QIUjCsWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg' 
    },
    { 
      title: 'Another spider', 
      url: 'http://www.bendbulletin.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=mhcJCVJ8KKHRPwwqAnbx98$daE2N3K4ZzOUsqbU5sYuoqiCu3qMqMhalP7QIUjCsWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg' 
    }] },
];

export default {
  getAlbums() {
    return albums;
  },
  getAlbum(id) {
    return albums.find(album => album.id === id);
  }
};




