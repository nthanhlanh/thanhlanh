//var danhsach = JSON.parse(localStorage.getItem("danhsachnhanvien"));
const nhanvien = (state = [], action) => {
  switch (action.type) {
    case "CAPNHAT_NHANVIEN":
      return action.nhanvien;
    case "TOGGLE_TODO":
      return state;
    default:
      return state;
  }
};

export default nhanvien;
