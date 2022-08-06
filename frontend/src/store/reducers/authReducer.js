import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as validator from "validatorjs";
import axios from "axios";

const initialState = {
  errors: {},
  response: {},
  loading: false,
};

const loginRules = {
  email: "required|email",
  password: "required",
};

const loginErrorMsg = {
  "required.email": "Email is requried!",
  "required.password": "Password is requried!",
  email: "Email must an valid email!",
};

const regisRules = {
  email: "required|email",
  name: "required",
  password: "required|min:6|same:password2",
  password2: "required|same:password",
};

const regisMsg = {
  "required.email": "Email is requried!",
  "required.password": "Password is requried!",
  "required.password2": "Confirm password is requried!",
  "required.name": "Name is requried!",
  "same.password": "Password must same with in the field of confirm password!",
  "same.password2": "Confirm password must same with in the field of password!",
  min: "Password must more than 6 character!",
  email: "Email must an valid email!",
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const val = new validator(formData, regisRules, regisMsg);

      if (val.fails()) {
        const errors = {
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
            fail:
              typeof val.errors.first("password") === "string" ? true : false,
          },
          password2: {
            msg: val.errors.first("password2"),
            fail:
              typeof val.errors.first("password2") === "string" ? true : false,
          },
        };

        return { success: false, data: errors };
      }

      const response = await axios
        .post("http://localhost:5000/auth/registration", formData)
        .then((res) => res.data);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const val = new validator(formData, loginRules, loginErrorMsg);
      if (val.fails()) {
        const errors = {
          email: {
            msg: val.errors.first("email"),
            fail: typeof val.errors.first("email") === "string" ? true : false,
          },
          password: {
            msg: val.errors.first("password"),
            fail:
              typeof val.errors.first("password") === "string" ? true : false,
          },
        };
        return { success: false, data: errors };
      }

      const response = await axios
        .post("http://localhost:5000/auth/login", formData)
        .then((res) => res.data);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      if (!action.payload.success) state.errors = action.payload.data;
      state.response = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      if (!action.payload.success) state.errors = action.payload.data;
      state.response = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
  },
});

export default authReducer.reducer;
