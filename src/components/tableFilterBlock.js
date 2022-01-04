import * as React from "react";
import { useState } from "react";
export default function TableFilterBlock(props) {
  //const [checked, setChecked] = useState(false);
  let { options, name } = props;
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  return (
    <div className="filter-block" style={{ paddingLeft: "10px" }}>
      <h4>{name}</h4>
      {options.map((option) => {
        return (
          <div key={option + "filter"} class="checkbox-group">
            <input type="checkbox" id={option} />
            <label htmlFor={option} style={{ textTransform: "capitalize" }}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
}
