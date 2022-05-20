import React from "react";

function Label(props) {
  const { name, color } = props;

  return (
    <div className="w-1/2">
      <p
        data-testid="label"
        className={
          "rounded-full text-xs border w-fit font-semibold py-0.5 px-3"
        }
        style={{
          backgroundColor: `${color}1f`,
          color: color,
          borderColor: color,
        }}
      >
        {name === "" ? "Label Preview" : name}
      </p>
    </div>
  );
}

export default Label;
