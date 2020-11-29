const getPathImage = async ({ files }) => {
  try {
    if (!files || Object.keys(files).length === 0) {
      return {
        code: 400,
        error: { message: "No Images were uploaded." },
      };
    }
    
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = getPathImage;
