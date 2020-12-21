// Resize.js

const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const aws = require("aws-sdk");
const { S3 } = require("aws-sdk");

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
class Resize {
  constructor(folder) {
    this.folder = folder;
  }
  async save(img) {
    const filename = Resize.filename();
    const filepath = this.filepath(filename);

    const data = await sharp(img.data)
      .resize(1080, 608, {
        // size image 1080*608
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .png();

    const params = {
      Bucket: process.env.S3_BUCKET,
      Key: filename,
      Expires: 60,
      Body: data,
      ACL: "public-read",
    };
    // console.log(params.Bucket);
    const res = await s3.upload(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Location);
        // return data.Location;
      }
    });
    // console.log(res);
    // await s3.listObjects(params, function (err, data) {
    //   if (err) {
    //     console.log("Error", err);
    //   } else {
    //     console.log("Success", data);
    //   }
    // });
    return `https://imgpack.s3.amazonaws.com/${filename}`;
  }
  static filename() {
    // random file name
    return `${uuidv4()}.png`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`);
  }
}
module.exports = Resize;
