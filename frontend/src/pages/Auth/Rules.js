export const loginRules = {
  email: "required|email",
  pwd: "required",
};

export const loginErrorMsg = {
  "required.email": "Email is requried!",
  "required.pwd": "Password is requried!",
  email: "Email must an valid email!",
};

export const regisRules = {
  email: "required|email",
  name: "required",
  password: "required|min:6|same:password2",
  password2: "required|same:password",
};

export const regisMsg = {
  "required.email": "Email is requried!",
  "required.password": "Password is requried!",
  "required.password2": "Confirm password is requried!",
  "required.name": "Name is requried!",
  "same.password": "Password must same with in the field of confirm password!",
  "same.password2": "Confirm password must same with in the field of password!",
  min: "Password must more than 6 character!",
  email: "Email must an valid email!",
};
