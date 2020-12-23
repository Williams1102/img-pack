const viewImages = require("_services/images/showByTopic");

const viewController = async (req, res) => {
  const result = await viewImages({ topicID: req.params.topicId });
  return res.status(result.code).json(result);
};

module.exports = viewController;