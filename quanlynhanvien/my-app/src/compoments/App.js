import React from "react";
import Nhanvien from "../containers/nhanvien";
import DanhSach from "../containers/danhsachnhanvien";

class App extends React.Component {
  render() {
    return (
      <div className="container row">
        <Nhanvien />
        <DanhSach />
        <div className="input-group col-sm-3">
          <span className="input-group-addon">
            generate Data <i className="glyphicon glyphicon-plus" />
          </span>
        </div>
      </div>
    );
  }
}
export default App;
