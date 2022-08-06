import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  response: {},
  qty: 0,
  loading: false,
};

export const showProduct = createAsyncThunk(
  "product/showProduct",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const productReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setQuantity(state, action) {
      state.qty = action.payload;
    },
  },
  extraReducers: {
    [showProduct.pending]: (state) => {
      state.loading = true;
    },
    [showProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [showProduct.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export const { setQuantity } = productReducer.actions;
export default productReducer.reducer;
