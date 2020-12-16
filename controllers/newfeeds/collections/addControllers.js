const createCollection = require("../../../services/collections/createCollection");

const addNewCollectionControllers = async (req, res) => {
  try {
    const result = await createCollection({
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

module.exports = addNewCollectionControllers;
