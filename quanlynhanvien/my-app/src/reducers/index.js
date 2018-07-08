import { combineReducers } from "redux";
import nhanviens from "./nhanviens";
import nhanvien from "./nhanvien";
import label from "./label";
import initsearch from "./initsearch";

export default combineReducers({
  nhanvien,
  nhanviens,
  label,
  initsearch
});
