import * as React from "react";
import { useState } from "react";
export default function TableFilterBlock(props) {
  let { options, name, handleFilterChange } = props;
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const filterState = updatedCheckedState
      .map((checked, index) => {
        return checked ? options[index] : false;
      })
      .filter(Boolean);

    handleFilterChange(filterState, name);
  };

  return (
    <div className="filter-block" style={{ paddingLeft: "10px" }}>
      <h4>{name}</h4>
      {options.map((option, index) => {
        return (
          <div key={option + "filter"} className="checkbox-group">
            <input
              type="checkbox"
              id={option}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
            <label htmlFor={option} style={{ textTransform: "capitalize" }}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
}
