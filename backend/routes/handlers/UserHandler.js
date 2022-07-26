const userModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");

const saveUser = async (req, res) => {
  const data = req.body;

  try {
    const takenEmail = await userModel.findOne({ email: data.email });

    if (takenEmail) {
      res.send(false);
    } else {
      const salt = bcrypt.genSaltSync(10);
      data.password = bcrypt.hashSync(req.body.password, salt);
      new userModel({
        email: data.email,
        name: data.name,
        password: data.password,
        image: "default.jpg",
        role: 2,
      }).save();
      res.json(true);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

module.exports = { saveUser };
