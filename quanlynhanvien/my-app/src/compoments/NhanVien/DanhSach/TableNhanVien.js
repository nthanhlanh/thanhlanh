import React from "react";
import RowNhanVien from "../DanhSach/RowNhanVien";

let ten;
let kichhoat;
let email;
class TableNhanVien extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     var { initsearch } = props;
  //     this.state = {
  //       ten: initsearch.ten,
  //       email: initsearch.email,
  //       kichhoat: initsearch.kichhoat
  //     };
  //   }
  componentWillReceiveProps(nextProps) {
    console.log("nextProps.kichhoat " + nextProps.initsearch.kichhoat);
    if (nextProps.initsearch.ten === "") {
      ten.value = nextProps.initsearch.ten;
      email.value = nextProps.initsearch.email;
      kichhoat.value = nextProps.initsearch.kichhoat;
    }
  }
  timkiemtennhanvien = () => {
    var { timkiemtennhanvien, initsearch } = this.props;
    timkiemtennhanvien(ten.value);
    initsearch(ten.value, email.value, kichhoat.value);
  };
  render() {
    var {
      nhanviens,
      timkiemkichhoatnhanvien,
      timkiememailnhanvien,
      initsearch
    } = this.props;
    var elenhanvien = nhanviens.map((item, index) => {
      return <RowNhanVien key={index} nv={item} index={index} />;
    });
    return (
      <div className="col-sm-8">
        <table className="table">
          <thead>
            <tr>
              <th>Stt</th>
              <th>Tên</th>
              <th>Trạng thái</th>
              <th>Email</th>
              <th>Hành Động</th>
            </tr>
            <tr>
              <th />
              <th>
                <input
                  id="searchName"
                  type="text"
                  name="searchName"
                  placeholder="Tìm kiếm Tên"
                  ref={node => (ten = node)}
                  onChange={() => this.timkiemtennhanvien(ten.value)}
                  value={initsearch.ten}
                />
              </th>
              <th>
                <select
                  ref={node => (kichhoat = node)}
                  onChange={() => timkiemkichhoatnhanvien(kichhoat.value)}
                >
                  <option value="-1"> Tất cả</option>
                  <option value="0"> Ẩn</option>
                  <option value="1"> Kích hoạt</option>
                </select>
              </th>
              <th>
                <input
                  id="searchEmail"
                  type="text"
                  name="searchEmail"
                  placeholder="Tìm kiếm Email"
                  ref={node => (email = node)}
                  onChange={() => timkiememailnhanvien(email.value)}
                />
              </th>
              <th />
            </tr>
          </thead>
          <tbody>{elenhanvien}</tbody>
        </table>
      </div>
    );
  }
}
export default TableNhanVien;
