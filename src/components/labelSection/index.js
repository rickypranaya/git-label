import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { v4 } from "uuid";

//components
import Label from "./Label";
import LabelEdit from "./LabelEdit";
import DisplayInfo from "./DisplayInfo";

//redux
import { useDispatch } from "react-redux";
import { createLabel, deleteLabel, editLabel } from "../../redux/labelActions";

function LabelSection(props) {
  const { type, labelInfo, wrapperStyle } = props;

  const editMode = type === "edit";
  const dispatch = useDispatch();
  const [displayMode, setDisplayMode] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#c5def5");

  useEffect(() => {
    if (editMode && labelInfo) {
      setLabel(labelInfo.name, labelInfo.description, labelInfo.color);
    }
  }, []);

  //handle input form
  const handleInput = (value, setState) => {
    setState(value);
  };

  // create a label
  const handleCreate = () => {
    const labelObj = {
      id: v4(),
      name: name,
      description: description,
      color: color,
    };
    dispatch(createLabel(labelObj));
    setLabel();
  };

  // edit a label
  const handleEdit = () => {
    const labelObj = {
      id: labelInfo.id,
      name: name,
      description: description,
      color: color,
    };
    dispatch(editLabel(labelObj));
    setDisplayMode(true);
  };

  // check if create or save is enabled
  const checkInput = () => {
    let check;
    if (editMode) {
      check = !(
        labelInfo.name === name &&
        labelInfo.description === description &&
        labelInfo.color === color
      );
    } else {
      check = name;
    }
    return check;
  };

  // delete a label
  const handleDelete = () => {
    dispatch(deleteLabel(labelInfo.id));
  };

  // user cancel editing
  const handleCancel = () => {
    setDisplayMode(true);
    setLabel(labelInfo.name, labelInfo.description, labelInfo.color);
  };

  //set label properties
  const setLabel = (name = "", desc = "", color = "#c5def5") => {
    setName(name);
    setDescription(desc);
    setColor(color);
  };

  return (
    <div className={classNames("p-4", wrapperStyle)}>
      <div className="flex justify-between">
        <Label name={name} color={color} />
        {editMode && (
          <DisplayInfo
            {...{ displayMode, description, setDisplayMode, handleDelete }}
          />
        )}
      </div>
      {(!displayMode || !editMode) && (
        <LabelEdit
          {...{
            checkInput,
            editMode,
            name,
            description,
            color,
            setName,
            setDescription,
            setColor,
            handleInput,
            handleCancel,
            handleCreate,
            handleEdit,
          }}
        />
      )}
    </div>
  );
}

export default LabelSection;
