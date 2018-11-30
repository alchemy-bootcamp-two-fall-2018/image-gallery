import artists from './artists-data.js';

export default {
  getAll() {
    return artists;
  },
  addArtist() {
    console.log('added');
  },
  findArtist() {
    return artists[0].albums;
  }
};