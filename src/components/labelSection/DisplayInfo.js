import React from "react";
import TextButton from "./TextButton";

function DisplayInfo(props) {
  const { displayMode, description, setDisplayMode, handleDelete } = props;

  return (
    <div data-testid="display-info" className="flex items-center  w-full">
      {displayMode && (
        <p
          data-testid="description"
          className="text-xs font-medium min-w-fit text-neutral-400"
        >
          {description}
        </p>
      )}
      <div className="flex space-x-5 justify-end w-full">
        {displayMode && (
          <TextButton name="Edit" onClick={() => setDisplayMode(false)} />
        )}
        <TextButton name="Delete" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default DisplayInfo;
