import artists from './artists-data.js';

export default {
  getAll() {
    return artists;
  },
  addArtist(newArtist) {
    artists.push(newArtist);
  },
  addRecord(newRecord, record) {
    console.log(newRecord, record);
    record.push(newRecord);
    console.log(artists);
  },
  findArtist(artistName) {
    return artists.find(artist => artist.name === artistName).albums;
  }
};