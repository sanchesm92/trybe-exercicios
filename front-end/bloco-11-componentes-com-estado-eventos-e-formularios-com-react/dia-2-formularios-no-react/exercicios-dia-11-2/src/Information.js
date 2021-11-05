import React from "react";
import Value from "./Values";

class Information extends React.Component {
  render() {
    const object = this.props.object;
    const keys = Object.keys(object);
    const values = Object.values(object);
    return (
      values.map((value, indice) =>  <Value key={`bc-${keys[indice]}`} name={keys[indice]} value={value} />)
    )
  }
}
export default Information;