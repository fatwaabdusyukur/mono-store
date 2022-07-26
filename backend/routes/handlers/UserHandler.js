const userModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { jsonWebToken } = require("../../config/environment");

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

const getUserByEmail = async (req, res) => {
  const data = req.body;

  const user = await userModel.findOne({ email: data.email });

  try {
    if (user) {
      if (bcrypt.compareSync(data.password, user.password)) {
        const payload = {
          id: user._id,
        };

        jwt.sign(
          payload,
          jsonWebToken.key,
          { expiresIn: jsonWebToken.lifeTime },
          (err, token) => {
            if (err) res.send(`Error: ${err}`);
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          }
        );
      } else {
        res.send("Wrong password!");
      }
    } else {
      res.send("Account not registered!");
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

module.exports = { saveUser, getUserByEmail };
