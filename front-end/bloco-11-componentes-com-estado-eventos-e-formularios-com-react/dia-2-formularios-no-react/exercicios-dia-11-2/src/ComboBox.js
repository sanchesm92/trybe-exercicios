import React from "react";

class ComboBox extends React.Component {
  render() {
    const { state } = this.props;
    return (
      <option key={state} >{state}</option>
    )
  }
}
export default ComboBox;