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
          user: {
            id: user._id,
          },
        };

        jwt.sign(
          payload,
          jsonWebToken.key,
          { expiresIn: jsonWebToken.lifeTime },
          (err, token) => {
            if (err) res.send(`Error: ${err}`);
            res.json({
              isLogged: true,
              token: token,
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

function verifyToken(req, res, next) {
  const token = req.get("x-auth-token");

  if (!token) return res.send(`Incorect token!`);

  try {
    jwt.verify(token, jsonWebToken.key, (err, decode) => {
      if (err) return res.send("Failed Authenticate!");
      else {
        req.user = decode.user;
        next();
      }
    });
  } catch (error) {
    res.send(`Error : ${error}`);
  }
}

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
};

module.exports = { saveUser, getUserByEmail, getUser, verifyToken };
