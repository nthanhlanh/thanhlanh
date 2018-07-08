import { connect } from "react-redux";
import TableNhanVien from "../compoments/NhanVien/DanhSach/TableNhanVien";
import {
  VisibilityFilters,
  timKiemTenNhanVien,
  timKiemKichHoatNhanVien,
  timKiemEmailNhanVien,
  initSeach
} from "../actions";

const getVisibleTodos = (nhanviens, filter) => {
  //console.log("nhanviens.size() " + nhanviens.length);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return nhanviens;
    case VisibilityFilters.SHOW_COMPLETED:
      return nhanviens.filter(t => t.ten);
    case VisibilityFilters.SHOW_ACTIVE:
      return nhanviens.filter(t => !t.kichhoat);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  nhanviens: getVisibleTodos(state.nhanviens, VisibilityFilters.SHOW_ALL),
  initsearch: state.initsearch
});

const mapDispatchToProps = dispatch => ({
  timkiemtennhanvien: ten => dispatch(timKiemTenNhanVien(ten)),
  timkiemkichhoatnhanvien: kichhoat =>
    dispatch(timKiemKichHoatNhanVien(kichhoat)),
  timkiememailnhanvien: email => dispatch(timKiemEmailNhanVien(email)),
  initsearch: (ten, email, kichhoat) =>
    dispatch(initSeach(ten, email, kichhoat))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableNhanVien);
