import { combineReducers } from "redux";
import nhanviens from "./nhanviens";
import nhanvien from "./nhanvien";
import label from "./label";

export default combineReducers({
  nhanvien,
  nhanviens,
  label
});
