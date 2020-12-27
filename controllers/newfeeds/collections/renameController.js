const changeName = require("_services/collections/rename");

const renameCollectionControllers = async (req, res) => {
  try {
    const result = await changeName({
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

module.exports = renameCollectionControllers;
