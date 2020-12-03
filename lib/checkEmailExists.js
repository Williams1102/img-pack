const mongoose = require("mongoose");
const { model } = mongoose;

const checkEmailExists = async (req, res, next) => {
	try {
		const { email } = req.body;
		// check email is exists in database
		const isExists = await model("users").findOne({ email }).lean();

		if (!!isExists) {
			return res.status(200).json({
				code: 200,
				error: { message: "users is existed !" },
			});
		}
		return next();
	} catch (e) {
		res.status(500).json({
			code: 500,
			error: { message: e.message },
		});
	}
};

module.exports = checkEmailExists;