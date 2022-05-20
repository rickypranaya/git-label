import React from "react";

function ColorButton(props) {
  const { value, setState, handleInput } = props;

  return (
    <input
      data-testid="color-picker"
      value={value}
      type="color"
      onChange={(e) => handleInput(e.target.value, setState)}
    />
  );
}

export default ColorButton;
