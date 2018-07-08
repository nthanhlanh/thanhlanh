import React from "react";
import { connect } from "react-redux";

class LabelThemMoi extends React.Component {
  render() {
    var { label } = this.props;
    return (
      <div className="input-group">
        <span className="input-group-addon">
          {label} <i className="glyphicon glyphicon-plus" />
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  label: state.label
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelThemMoi);
