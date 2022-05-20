import React from "react";

function TextButton(props) {
  const { name, onClick } = props;

  return (
    <button
      data-testid="text-button"
      onClick={onClick}
      className={
        "text-xs font-medium text-neutral-400 cursor-pointer select-none hover:text-white"
      }
    >
      {name}
    </button>
  );
}

export default TextButton;
