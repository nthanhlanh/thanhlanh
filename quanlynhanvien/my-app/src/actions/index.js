export const themNhanVien = (id, ten, email, kichhoat) => ({
  type: "THEM_NHANVIEN",
  id: id,
  ten: ten,
  email: email,
  kichhoat: kichhoat
});

export const capNhatNhanVien = nhanvien => ({
  type: "CAPNHAT_NHANVIEN",
  nhanvien: nhanvien
});

export const xoaNhanVien = id => ({
  type: "XOA_NHANVIEN",
  id: id
});

export const timKiemTenNhanVien = ten => ({
  type: "TIMKIEM_TEN_NHANVIEN",
  ten: ten
});

export const timKiemKichHoatNhanVien = kichhoat => ({
  type: "TIMKIEM_KICHHOAT_NHANVIEN",
  kichhoat: kichhoat
});

export const timKiemEmailNhanVien = email => ({
  type: "TIMKIEM_EMAIL_NHANVIEN",
  email: email
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const themMoiLabel = () => ({
  type: "THEMMOI_LABEL"
});

export const capNhatLabel = () => ({
  type: "CAPNHAT_LABEL"
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
