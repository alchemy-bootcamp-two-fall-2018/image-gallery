import artists from './artists-data.js';

export default {
  getAll() {
    return artists;
  },
  addArtist(newArtist) {
    newArtist.albums = [];
    artists.push(newArtist);
    this.store();
  },
  addRecord(newRecord, record) {
    record.push(newRecord);
    this.store();
  },
  findArtist(artistName) {
    return artists.find(artist => artist.name === artistName).albums;
  },
  store() {
    localStorage.setItem('artists', JSON.stringify(artists));
  }
};