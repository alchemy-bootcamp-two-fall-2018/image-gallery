import artists from './artists-data.js';

export default {
  getAll() {
    return artists;
  },
  addArtist(newArtist) {
    console.log(newArtist);
    artists.push(newArtist);
    console.log(artists);
  },
  findArtist(artistName) {
    return artists.find(artist => artist.name === artistName).albums;
  }
};