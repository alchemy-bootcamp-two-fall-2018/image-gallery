import shortid from 'shortid';

export default [
  { 
    id: shortid.generate(),
    title: 'AstroWorld',
    artist: 'Travis Scott',
    images: [
      {
        title: 'AstroWorld cover',
        url:'https://i.redd.it/9k136pcdiq601.jpg'
      },
      { 
        title: 'Travis Scott',
        url:'https://djbooth.net/.image/t_share/MTU4MTcwNTc0MzE1NTk1MDQ5/travis-scott-astroworld-nostalgia.jpg' 
      }
    ]
  },
  {
    id: shortid.generate(),
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
  },
  
];