import artists from './artists-data.js';

export default {
  getAll() {
    return artists;
  },
  addArtist(newArtist) {
    artists.push(newArtist);
  },
  findArtist(artistName) {
    return artists.find(artist => artist.name === artistName).albums;
  }
};