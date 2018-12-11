import artistsData from './artists-data.js';

const json = JSON.parse(localStorage.getItem('artists'));
let artists = [];

json ? artists = json : artists = artistsData;

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
    return artists.find(artist => artist.name === artistName);
  },
  findAlbum(albumTitle) {
    return artists.find(artist => artist.albums.find(album => album.title === albumTitle)).albums.find(album => album.title === albumTitle);
  },
  updateArtist(updatedInfo, artist) {
    artist.name = updatedInfo.name;
    artist.image = updatedInfo.image;
    this.store();
  },
  updateRec(updatedInfo, record) {
    record.title = updatedInfo.title;
    record.imgUrl = updatedInfo.imgUrl;
    this.store();
  },
  store() {
    localStorage.setItem('artists', JSON.stringify(artists));
  }
};