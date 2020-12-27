const removeCol = require("_services/collections/deleteCollection");

const removeCollectionControllers = async (req, res) => {
  try {
    const result = await removeCol({
      collectionId: req.params.collectionId,
      collectionInfo: req.body,
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

module.exports = removeCollectionControllers;
