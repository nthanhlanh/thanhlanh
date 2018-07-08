import React from "react";
import LabelThemMoi from "../DanhSach/LabelThemMoi";
import { connect } from "react-redux";

let id;
let ten;
let email;
let kiachhoat;
class Form extends React.Component {
  luunhanvien = () => {
    var { capnhatlabel, capnhatnhanvien, themnhanvien } = this.props;
    themnhanvien(id.value, ten.value, email.value, kiachhoat.value);
    capnhatnhanvien({ id: "", ten: "", email: "", kichhoat: 0 });
    capnhatlabel();
  };
  componentWillReceiveProps(nextProps) {
    id.value = nextProps.nhanvien.id;
    ten.value = nextProps.nhanvien.ten;
    email.value = nextProps.nhanvien.email;
    kiachhoat.value = nextProps.nhanvien.kichhoat;
  }
  componentWillUpdate(nextProps, nextState) {
    id.value = nextProps.nhanvien.id;
    ten.value = nextProps.nhanvien.ten;
    email.value = nextProps.nhanvien.email;
    kiachhoat.value = nextProps.nhanvien.kichhoat;
  }
  thuchienhuy() {
    var { capnhatlabel, capnhatnhanvien } = this.props;
    capnhatnhanvien({ id: "", ten: "", email: "", kichhoat: 0 });
    capnhatlabel();
  }
  render() {
    return (
      <div className="col-sm-4">
        <LabelThemMoi />
        <div className="form-group ">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Tên
          </label>
          <div className="col-sm-9">
            <input
              type="hidden"
              className="form-control"
              id="id"
              placeholder="Nhập Tên"
              name="id"
              ref={node => (id = node)}
            />
            <input
              type="text"
              className="form-control"
              id="ten"
              placeholder="Nhập Tên"
              name="ten"
              ref={node => (ten = node)}
            />
          </div>
        </div>
        <div className="form-group ">
          <label className="control-label" htmlFor="pwd">
            Email
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Nhập Email"
              name="email"
              ref={node => (email = node)}
            />
          </div>
        </div>
        <div className="form-group ">
          <label className="control-label" htmlFor="pwd">
            Kích hoạt
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              name="kichhoat"
              ref={node => (kiachhoat = node)}
            >
              <option value={0}> Ẩn</option>
              <option value={1}> Kích hoạt</option>
            </select>
          </div>
        </div>
        <div className="form-group col-sm-12">
          <label className="control-label col-sm-2" htmlFor="pwd" />
          <div className="col-sm-10">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.luunhanvien}
            >
              Lưu
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.thuchienhuy()}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Form);
