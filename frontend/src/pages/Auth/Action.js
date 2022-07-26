import * as validator from "validatorjs";
import axios from "axios";
import { loginRules, loginErrorMsg, regisRules, regisMsg } from "./Rules";

export const login = (data) => {
  return new Promise((resolve, rejected) => {
    const val = new validator(data, loginRules, loginErrorMsg);
    if (val.fails()) {
      resolve({
        email: {
          msg: val.errors.first("email"),
          fail: typeof val.errors.first("email") === "string" ? true : false,
        },
        password: {
          msg: val.errors.first("pwd"),
          fail: typeof val.errors.first("pwd") === "string" ? true : false,
        },
      });
    } else {
      rejected("Success");
    }
  });
};

export const regis = (data) => {
  return new Promise((resolve, rejected) => {
    const val = new validator(data, regisRules, regisMsg);

    if (val.fails()) {
      resolve({
        email: {
          msg: val.errors.first("email"),
          fail: typeof val.errors.first("email") === "string" ? true : false,
        },
        name: {
          msg: val.errors.first("name"),
          fail: typeof val.errors.first("name") === "string" ? true : false,
        },
        password: {
          msg: val.errors.first("password"),
          fail: typeof val.errors.first("password") === "string" ? true : false,
        },
        password2: {
          msg: val.errors.first("password2"),
          fail:
            typeof val.errors.first("password2") === "string" ? true : false,
        },
      });
    } else {
      axios
        .post("http://localhost:5000/auth/registration", data)
        .then((res) => resolve(res.data))
        .catch((err) => rejected(err));
    }
  });
};
