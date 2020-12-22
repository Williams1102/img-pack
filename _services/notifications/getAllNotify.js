const mongoose = require("mongoose");
const Notifications = mongoose.model("notifications");

const getAllNotify = async ({ authPayload }) => {
  try {
    const { id } = authPayload;

    const notify = await Notifications.find({ belongsTo: id }).sort({ createdAt: -1 });

    return {
      code: 200,
      data: notify,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = getAllNotify;
