import { connect } from "react-redux";
import Form from "../compoments/NhanVien/ThemMoi/Form";
import { themMoiLabel, capNhatNhanVien, themNhanVien } from "../actions/index";

const mapStateToProps = state => ({
  nhanvien: state.nhanvien
});

const mapDispatchToProps = dispatch => ({
  capnhatnhanvien: nhanvien => dispatch(capNhatNhanVien(nhanvien)),
  capnhatlabel: () => dispatch(themMoiLabel()),
  themnhanvien: (id, ten, email, kichhoat) =>
    dispatch(themNhanVien(id, ten, email, kichhoat))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
