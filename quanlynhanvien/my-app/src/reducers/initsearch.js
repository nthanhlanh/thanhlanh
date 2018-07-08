//var danhsach = JSON.parse(localStorage.getItem("danhsachnhanvien"));
const initsearch = (state = [], action) => {
  switch (action.type) {
    case "INIT_SEARCH":
      return {
        ten: action.ten,
        email: action.email,
        kichhoat: action.kichhoat
      };
    default:
      return {
        ten: "",
        email: "",
        kichhoat: -1
      };
  }
};

export default initsearch;
