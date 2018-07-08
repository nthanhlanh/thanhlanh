const label = (state = "Thêm mới nhân viên", action) => {
  switch (action.type) {
    case "THEMMOI_LABEL":
      return "Thêm mới nhân viên";
    case "CAPNHAT_LABEL":
      return "Cập nhật nhân viên";
    default:
      return state;
  }
};

export default label;
