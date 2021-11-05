import React from "react";

class Value extends React.Component {
  render() {
    const { value, name } = this.props;
    return (
      <p>{`${name}: ${value}`}</p>
    )
  }
}
export default Value;