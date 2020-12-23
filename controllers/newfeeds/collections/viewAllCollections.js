const showCollection = require("_services/collections/viewAllCollections");

const showCollectionControllers = async (req, res) => {
  try {
    const result = await showCollection({
      authPayload: req.payload,
    });

    return res.status(result.code).json(result);
  } catch (e) {
    return res.status(500).json({
      code: 500,
      error: { message: e.message },
    });
  }
};

module.exports = showCollectionControllers;
