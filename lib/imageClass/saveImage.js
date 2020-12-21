const appRoot = require("app-root-path");
const Resize = require("./resizeImage");
const path = require("path");

const saveImage = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return next();
    }
    const imagePath = path.join(appRoot.path, "/public/images");
    const file = new Resize(imagePath);
    // const files = mapValues(req.files, "name");
    for (const key in req.files) {
      if (req.files.hasOwnProperty(key)) {
        const e = req.files[key];
        const imageID = await file.save(e);
        console.log(imageID);
        req.body[key] = imageID;
      }
    }
    console.log("saved to src !");
    // return res.status(200).json({ name: files });
    next();
  } catch (e) {
    return res.json({
      code: 500,
      error: { message: e.message },
    });
  }
};


module.exports = saveImage;
