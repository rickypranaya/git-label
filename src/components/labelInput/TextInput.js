import React from "react";

function TextInput(props) {
  const { value, placeholder, handleInput, setState } = props;

  return (
    <input
      data-testid="text-input"
      onChange={(e) => handleInput(e.target.value, setState)}
      value={value}
      placeholder={placeholder}
      className="text-white block w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-sm shadow-sm placeholder-neutral-500
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
    />
  );
}

export default TextInput;
