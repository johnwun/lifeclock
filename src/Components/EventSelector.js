import React, { Component } from "react";
import { includes } from "lodash";
import "../App.css";

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, selected, handleChange } = this.props;
    return (
      <div className="side-panel">
        Choose Categories
        <select
          multiple
          value={selected}
          className="side-panel-select"
          onChange={handleChange}
        >
          {items.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Example;
