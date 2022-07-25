import * as validator from "validatorjs";
import { loginRules, loginErrorMsg, regisRules, regisMsg } from "./Rules";

export const login = (data) => {
  let result = {};

  const val = new validator(data, loginRules, loginErrorMsg);
  if (val.fails()) {
    result = {
      email: {
        msg: val.errors.first("email"),
        fail: typeof val.errors.first("email") === "string" ? true : false,
      },
      password: {
        msg: val.errors.first("pwd"),
        fail: typeof val.errors.first("pwd") === "string" ? true : false,
      },
    };
  }

  return result;
};

export const regis = (data) => {
  let result = {};

  const val = new validator(data, regisRules, regisMsg);

  if (val.fails()) {
    result = {
      email: {
        msg: val.errors.first("email"),
        fail: typeof val.errors.first("email") === "string" ? true : false,
      },
      name: {
        msg: val.errors.first("name"),
        fail: typeof val.errors.first("name") === "string" ? true : false,
      },
      password1: {
        msg: val.errors.first("password1"),
        fail: typeof val.errors.first("password1") === "string" ? true : false,
      },
      password2: {
        msg: val.errors.first("password2"),
        fail: typeof val.errors.first("password2") === "string" ? true : false,
      },
    };
  }

  return result;
};
