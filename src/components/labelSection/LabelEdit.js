import React from "react";

//components
import LabelInput from "../labelInput";
import Button from "../button";

function LabelEdit(props) {
  const {
    name,
    checkInput,
    description,
    color,
    editMode,
    changeColor,
    handleCancel,
    handleCreate,
    handleEdit,
    setName,
    setDescription,
    setColor,
    handleInput,
  } = props;

  const inputData = [
    {
      setState: setName,
      value: name,
      placeholder: "Label name",
      label: "Label name",
    },
    {
      setState: setDescription,
      value: description,
      placeholder: "Description (optional)",
      label: "Description",
    },
    {
      setState: setColor,
      value: color,
      label: "Color",
      onClick: changeColor,
    },
  ];

  const enabled = checkInput();

  return (
    <div className="flex items-end justify-between mt-6">
      <div className="flex space-x-5">
        {inputData.map((data) => (
          <LabelInput key={data.label} {...data} {...{ handleInput }} />
        ))}
      </div>
      <div className="flex space-x-3">
        {editMode && <Button name="Cancel" onClick={handleCancel} />}
        <Button
          onClick={!editMode ? handleCreate : handleEdit}
          name={!editMode ? "Create label" : "Save changes"}
          type="default"
          enabled={enabled}
        />
      </div>
    </div>
  );
}

export default LabelEdit;
