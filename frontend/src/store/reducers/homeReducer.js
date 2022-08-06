import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  currentPage: 1,
  totalPage: 0,
  loading: false,
};

export const showAllProduct = createAsyncThunk(
  "home/showAllProduct",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/pages/${thunkAPI.getState().home.currentPage}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const homeReducer = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setPage(state, param) {
      const { payload } = param;
      state.currentPage = payload;
    },
  },
  extraReducers: {
    [showAllProduct.pending]: (state) => {
      state.loading = true;
    },
    [showAllProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = [...action.payload.result];
      state.currentPage = action.payload.currentPage;
      state.totalPage = action.payload.totalPage;
    },
    [showAllProduct.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.error);
    },
  },
});

export const { setPage } = homeReducer.actions;
export default homeReducer.reducer;
