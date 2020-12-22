const mongoose = require("mongoose");
const Notifications = mongoose.model("notifications");

const addNewNotifications = async ({ contents, authPayload }) => {
  try {
    const { title, message, endpoint } = contents;
    const { id } = authPayload;
    const newData = {
      title,
      message,
      endpoint,
      belongsTo: id,
    };
    const notification = await Notifications.create(newData);

    return {
      code: 200,
      data: notification,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = addNewNotifications;
