import React from "react";

class Luu extends React.Component {
  luunhanvien = () => {
    this.props.luunhanvien(333);
  };
  huynhanvien = () => {
    this.props.huynhanvien();
  };
  render() {
    return (
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
            onClick={this.huynhanvien}
          >
            Hủy
          </button>
        </div>
      </div>
    );
  }
}
export default Luu;
