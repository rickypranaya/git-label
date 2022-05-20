import { CREATE_LABEL, DELETE_LABEL, EDIT_LABEL } from "./labelTypes";

export const createLabel = (object) => {
  return {
    type: CREATE_LABEL,
    payload: object,
  };
};

export const deleteLabel = (id) => {
  return {
    type: DELETE_LABEL,
    payload: id,
  };
};

export const editLabel = (label) => {
  return {
    type: EDIT_LABEL,
    payload: label,
  };
};
