import shortid from 'shortid';

const albums = [
  {
    id: 'trees',
    title: 'Christmas Trees',
    images: [
      {
        title: 'Portland Christmas Tree',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWrxXcUUOISDzAP18z2J_5pm7OUPDmc-LIi8MyXhv4TUKAInn'
      },
      {
        title: 'NY Christmas Tree',
        url: 'http://blog.redcarpets.com/wp-content/blogs.dir/21/files/2014/12/use-blog.jpg'
      }
    ]
  },
  {
    id: 'helpers',
    title: 'Santa Helpers',
    images: [
      {
        title: 'Happy Christmas Cat',
        url: 'https://i.pinimg.com/originals/d0/91/1b/d0911b1e862f82ddc7f53f8265435d77.jpg'
      },
      {
        title: '2 Christmas Doggos',
        url: 'https://i.pinimg.com/originals/41/e5/06/41e5066d12099d2f3cb11cfa9b77a039.jpg'
      }
    ]
  },
  {
    id: 'lights',
    title: 'Christmas Lights',
    images: [
      {
        title: 'Christmas Crazy',
        url: 'https://happyholidaysblog.com/wp-content/uploads/Christmas-Lights-On-Houses-09.jpg'
      },
      {
        title: 'Light Overload',
        url: 'http://tarbell.com/newspress/wp-content/uploads/2015/12/christmas-lights-1.jpg'
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
  },
  add(album) {
    album.id = shortid.generate();
    album.images = [];
    albums.push(album);
    return album;
  },
};
