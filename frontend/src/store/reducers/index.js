import { combineReducers } from "redux";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  product: productReducer,
});

export default rootReducer;
