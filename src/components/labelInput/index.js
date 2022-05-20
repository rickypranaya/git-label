import React from "react";

//components
import TextInput from "./TextInput";
import ColorButton from "./ColorButton";

function LabelInput(props) {
  const { value, placeholder, label, setState, handleInput } = props;

  return (
    <div data-testid="label-input">
      <p className="text-neutral-200 text-left text-sm font-bold">{label}</p>
      <div className="mt-2 flex items-center space-x-3 ">
        {label === "Color" && (
          <ColorButton {...{ value, setState, handleInput }} />
        )}
        <TextInput {...{ value, placeholder, setState, handleInput }} />
      </div>
    </div>
  );
}

export default LabelInput;
