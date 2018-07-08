import React from "react";

class TimKiem extends React.Component {
  render() {
    return (
      <div className="input-group col-sm-6">
        <input
          id="Search"
          type="text"
          className="form-control"
          name="Search"
          placeholder="Search"
        />
        <span className="input-group-addon">
          <i className="glyphicon glyphicon-zoom-out" />
        </span>
      </div>
    );
  }
}
export default TimKiem;
