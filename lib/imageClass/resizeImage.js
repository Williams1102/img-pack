// Resize.js

const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const path = require("path");

class Resize {
  constructor(folder) {
    this.folder = folder;
  }
  async save(img) {

    const filename = Resize.filename();
    const filepath = this.filepath(filename);

    await sharp(img.data)
      .resize(1080, 608, { // size image 1080*608
        fit: sharp.fit.inside,
        withoutEnlargement: true
      }).png().toFile(filepath);

    return filename;
  }
  static filename() {
    // random file name
    return `${uuidv4()}.png`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = Resize;