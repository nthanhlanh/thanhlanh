import React from "react";
import { connect } from "react-redux";
import {
  capNhatNhanVien,
  capNhatLabel,
  themMoiLabel,
  xoaNhanVien
} from "../../../actions/index";

class RowNhanVien extends React.Component {
  thuchiencapnhat = () => {
    var { nv, capnhatnhanvien, capnhatlabel } = this.props;
    capnhatnhanvien(nv);
    capnhatlabel();
  };

  thuchienxoa() {
    var { nv, xoanhanvien, themmoilabel, capnhatnhanvien } = this.props;
    xoanhanvien(nv.id);
    themmoilabel();
    capnhatnhanvien({ id: "", ten: "", email: "", kichhoat: 0 });
  }

  render() {
    var { nv, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{nv.ten}</td>
        <td>{Number(nv.kichhoat) === 1 ? "Kích hoạt" : "Ẩn"}</td>
        <td>{nv.email}</td>
        <td>
          <span onClick={() => this.thuchiencapnhat()}>
            <i className="glyphicon glyphicon-pencil" />Sửa
          </span>
          <span onClick={() => this.thuchienxoa()}>
            <i className="glyphicon glyphicon-floppy-remove" />Xóa
          </span>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = state => ({
  //nhanvien: state.nhanvien
});

const mapDispatchToProps = dispatch => ({
  capnhatnhanvien: nhanvien => dispatch(capNhatNhanVien(nhanvien)),
  capnhatlabel: () => dispatch(capNhatLabel()),
  themmoilabel: () => dispatch(themMoiLabel()),
  xoanhanvien: id => dispatch(xoaNhanVien(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RowNhanVien);
