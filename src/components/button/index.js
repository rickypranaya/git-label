import React from "react";
import classNames from "classnames";

function index(props) {
  const { name, type, onClick, enabled = true } = props;

  return (
    <button
      data-testid="primary-button"
      disabled={!enabled}
      onClick={onClick}
      className={classNames(
        "disabled:opacity-50 disabled:cursor-default disabled:bg-green-600 text-neutral-100 font-semibold text-sm w-fit h-fit rounded-md py-2 px-4 cursor-pointer duration-200",
        type === "default"
          ? "bg-green-600 border border-green-400 hover:bg-green-500"
          : "bg-neutral-700 border-neutral-600 border hover:bg-neutral-600 hover:border-neutral-400"
      )}
    >
      {name}
    </button>
  );
}

export default index;
