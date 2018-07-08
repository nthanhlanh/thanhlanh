import React from "react";
import TimKiem from "./TimKiem";
import LabelThemMoi from "./LabelThemMoi";
import TableNhanVien from "./TableNhanVien";

class DanhSach extends React.Component {
  
  render() {
    return (
      <div className="col-sm-8">
        <LabelThemMoi />
        <TimKiem />
        <TableNhanVien  />
      </div>
    );
  }
}
export default DanhSach;
