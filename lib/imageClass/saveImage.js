const saveImage = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.json({
        code: 400,
        error: { message: "No Images were uploaded." },
      });
    }
    console.log(process.env.NODE_PATH);
    await setTimeout(() => { }, 100);
    next();
  } catch (e) {
    return res.json({
      code: 500,
      error: { message: e.message },
    });
  }
};

module.exports = getPathImage;
