import artists from './artists-data.js';

export default {
  getAll() {
    return artists;
  },
  addArtist() {
    console.log('added');
  },
  findArtist(artistName) {
    return artists.find(artist => artist.name === artistName).albums;
  }
};