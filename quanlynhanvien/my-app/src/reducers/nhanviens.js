var ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ID_LENGTH = 8;
var generate = () => {
  var rtn = "";
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
};
var findIndexInArry = (arry, id) => {
  for (var i = 0; i < arry.length; i++) {
    if (arry[i].id === id) {
      return i;
    }
  }
};
const initialState = localStorage.getItem("danhsachnhanvien")
  ? JSON.parse(localStorage.getItem("danhsachnhanvien"))
  : [];
var index = "";
const nhanviens = (state = initialState, action) => {
  var listnv = [...state];
  switch (action.type) {
    case "THEM_NHANVIEN":
      if (action.id) {
        index = findIndexInArry(listnv, action.id);
        listnv.splice(index, 1);
        listnv.push({
          id: action.id,
          ten: action.ten,
          email: action.email,
          kichhoat: action.kichhoat
        });
      } else {
        listnv.push({
          id: generate(),
          ten: action.ten,
          email: action.email,
          kichhoat: action.kichhoat
        });
      }
      localStorage.setItem("danhsachnhanvien", JSON.stringify(listnv));
      return listnv;
    case "XOA_NHANVIEN":
      listnv = localStorage.getItem("danhsachnhanvien")
        ? JSON.parse(localStorage.getItem("danhsachnhanvien"))
        : [];
      index = findIndexInArry(listnv, action.id);
      listnv.splice(index, 1);
      localStorage.setItem("danhsachnhanvien", JSON.stringify(listnv));
      return listnv;
    case "TIMKIEM_TEN_NHANVIEN":
      listnv = localStorage.getItem("danhsachnhanvien")
        ? JSON.parse(localStorage.getItem("danhsachnhanvien"))
        : [];
      if (action.ten) {
        listnv = listnv.filter(nv => nv.ten.includes(action.ten));
      }
      return listnv;
    case "TIMKIEM_KICHHOAT_NHANVIEN":
      listnv = localStorage.getItem("danhsachnhanvien")
        ? JSON.parse(localStorage.getItem("danhsachnhanvien"))
        : [];
      if (Number(action.kichhoat) === 0 || Number(action.kichhoat) === 1) {
        listnv = listnv.filter(nv =>
          nv.kichhoat.includes(Number(action.kichhoat))
        );
      }
      return listnv;
    case "TIMKIEM_EMAIL_NHANVIEN":
      listnv = localStorage.getItem("danhsachnhanvien")
        ? JSON.parse(localStorage.getItem("danhsachnhanvien"))
        : [];
      if (action.email) {
        listnv = listnv.filter(nv => nv.email.includes(action.email));
      }
      return listnv;
    default:
      return listnv;
  }
};

export default nhanviens;
